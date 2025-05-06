// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicalRecords {
    // Define role constants
    uint8 private constant ROLE_NONE = 0;
    uint8 private constant ROLE_PATIENT = 1;
    uint8 private constant ROLE_HOSPITAL = 2;
    uint8 private constant ROLE_INSURANCE = 3;
    
    // Structure for users
    struct User {
        string name;
        string email;
        uint8 role;
        bool isActive;
        uint256 createdAt;
    }
    
    // Structure for medical records
    struct MedicalRecord {
        uint256 id;
        address patientId;
        address hospitalId;
        string recordHash; // IPFS hash of the record
        string recordType;
        uint256 timestamp;
        bool isVerified;
        address[] allowedInsurers; // Insurance companies allowed to access
    }
    
    // Structure for equipment used in a procedure
    struct Equipment {
        uint256 id;
        string name;
        string model;
        string serialNumber;
        string department;
        uint256 lastMaintenance;
        uint256 nextMaintenance;
        bool isActive;
    }
    
    // Structure for treatment/operation details
    struct Treatment {
        uint256 id;
        uint256 recordId;
        string treatmentType;
        string diagnosis;
        uint256[] equipmentIds;
        string prescriptionHash; // IPFS hash of prescription
        uint256 timestamp;
    }
    
    // Structure for insurance claims
    struct InsuranceClaim {
        uint256 id;
        uint256 recordId;
        address patientId;
        address insurerId;
        uint256 amount;
        string claimHash; // IPFS hash of claim details
        uint8 status; // 0: Pending, 1: Approved, 2: Rejected
        uint256 timestamp;
    }
    
    // Mappings
    mapping(address => User) public users;
    mapping(uint256 => MedicalRecord) public medicalRecords;
    mapping(uint256 => Equipment) public equipments;
    mapping(uint256 => Treatment) public treatments;
    mapping(uint256 => InsuranceClaim) public insuranceClaims;
    
    // User record access mappings
    mapping(address => mapping(uint256 => bool)) public patientRecordAccess;
    mapping(address => mapping(uint256 => bool)) public hospitalRecordAccess;
    mapping(address => mapping(uint256 => bool)) public insurerRecordAccess;
    
    // Counters
    uint256 private recordCount;
    uint256 private equipmentCount;
    uint256 private treatmentCount;
    uint256 private claimCount;
    
    // Events
    event UserRegistered(address indexed userAddress, string name, uint8 role);
    event RecordCreated(uint256 indexed recordId, address indexed patientId, address indexed hospitalId);
    event RecordAccessGranted(uint256 indexed recordId, address indexed grantedTo, address indexed grantedBy);
    event RecordAccessRevoked(uint256 indexed recordId, address indexed revokedFrom, address indexed revokedBy);
    event EquipmentAdded(uint256 indexed equipmentId, string name, string model);
    event TreatmentAdded(uint256 indexed treatmentId, uint256 indexed recordId, string treatmentType);
    event ClaimSubmitted(uint256 indexed claimId, uint256 indexed recordId, address indexed insurerId);
    event ClaimStatusUpdated(uint256 indexed claimId, uint8 status);
    
    // Modifiers
    modifier onlyPatient() {
        require(users[msg.sender].role == ROLE_PATIENT, "Only patients can perform this action");
        _;
    }
    
    modifier onlyHospital() {
        require(users[msg.sender].role == ROLE_HOSPITAL, "Only hospitals can perform this action");
        _;
    }
    
    modifier onlyInsurance() {
        require(users[msg.sender].role == ROLE_INSURANCE, "Only insurance companies can perform this action");
        _;
    }
    
    modifier activeUser() {
        require(users[msg.sender].isActive, "User is not active");
        _;
    }
    
    modifier canAccessRecord(uint256 recordId) {
        require(
            patientRecordAccess[msg.sender][recordId] || 
            hospitalRecordAccess[msg.sender][recordId] || 
            insurerRecordAccess[msg.sender][recordId],
            "You do not have access to this record"
        );
        _;
    }
    
    // Constructor
    constructor() {
        // Initialize counters
        recordCount = 0;
        equipmentCount = 0;
        treatmentCount = 0;
        claimCount = 0;
    }
    
    // User registration functions
    function registerPatient(string memory name, string memory email) public {
        require(users[msg.sender].role == ROLE_NONE, "User already registered");
        
        users[msg.sender] = User({
            name: name,
            email: email,
            role: ROLE_PATIENT,
            isActive: true,
            createdAt: block.timestamp
        });
        
        emit UserRegistered(msg.sender, name, ROLE_PATIENT);
    }
    
    function registerHospital(string memory name, string memory email) public {
        require(users[msg.sender].role == ROLE_NONE, "User already registered");
        
        users[msg.sender] = User({
            name: name,
            email: email,
            role: ROLE_HOSPITAL,
            isActive: true,
            createdAt: block.timestamp
        });
        
        emit UserRegistered(msg.sender, name, ROLE_HOSPITAL);
    }
    
    function registerInsurance(string memory name, string memory email) public {
        require(users[msg.sender].role == ROLE_NONE, "User already registered");
        
        users[msg.sender] = User({
            name: name,
            email: email,
            role: ROLE_INSURANCE,
            isActive: true,
            createdAt: block.timestamp
        });
        
        emit UserRegistered(msg.sender, name, ROLE_INSURANCE);
    }
    
    // Medical record functions
    function createMedicalRecord(
        address patientId, 
        string memory recordHash, 
        string memory recordType
    ) 
        public 
        onlyHospital 
        activeUser 
    {
        require(users[patientId].role == ROLE_PATIENT, "Invalid patient address");
        
        recordCount++;
        
        address[] memory allowedInsurers = new address[](0);
        
        medicalRecords[recordCount] = MedicalRecord({
            id: recordCount,
            patientId: patientId,
            hospitalId: msg.sender,
            recordHash: recordHash,
            recordType: recordType,
            timestamp: block.timestamp,
            isVerified: false,
            allowedInsurers: allowedInsurers
        });
        
        // Set access rights
        patientRecordAccess[patientId][recordCount] = true;
        hospitalRecordAccess[msg.sender][recordCount] = true;
        
        emit RecordCreated(recordCount, patientId, msg.sender);
    }
    
    function verifyRecord(uint256 recordId) 
        public 
        onlyHospital 
        activeUser 
        canAccessRecord(recordId)
    {
        require(medicalRecords[recordId].hospitalId == msg.sender, "Only the hospital that created the record can verify it");
        require(!medicalRecords[recordId].isVerified, "Record is already verified");
        
        medicalRecords[recordId].isVerified = true;
    }
    
    // Grant access to an insurance company
    function grantInsuranceAccess(uint256 recordId, address insurerId) 
        public 
        onlyPatient 
        activeUser 
        canAccessRecord(recordId) 
    {
        require(medicalRecords[recordId].patientId == msg.sender, "Only the patient can grant access");
        require(users[insurerId].role == ROLE_INSURANCE, "Address is not an insurance company");
        
        // Add the insurer to allowed list
        bool alreadyAllowed = false;
        for (uint i = 0; i < medicalRecords[recordId].allowedInsurers.length; i++) {
            if (medicalRecords[recordId].allowedInsurers[i] == insurerId) {
                alreadyAllowed = true;
                break;
            }
        }
        
        if (!alreadyAllowed) {
            address[] memory newAllowedInsurers = new address[](medicalRecords[recordId].allowedInsurers.length + 1);
            for (uint i = 0; i < medicalRecords[recordId].allowedInsurers.length; i++) {
                newAllowedInsurers[i] = medicalRecords[recordId].allowedInsurers[i];
            }
            newAllowedInsurers[medicalRecords[recordId].allowedInsurers.length] = insurerId;
            medicalRecords[recordId].allowedInsurers = newAllowedInsurers;
        }
        
        insurerRecordAccess[insurerId][recordId] = true;
        
        emit RecordAccessGranted(recordId, insurerId, msg.sender);
    }
    
    // Revoke access from an insurance company
    function revokeInsuranceAccess(uint256 recordId, address insurerId) 
        public 
        onlyPatient 
        activeUser 
        canAccessRecord(recordId)
    {
        require(medicalRecords[recordId].patientId == msg.sender, "Only the patient can revoke access");
        
        insurerRecordAccess[insurerId][recordId] = false;
        
        // Remove from allowed insurers list
        uint indexToRemove = type(uint).max;
        for (uint i = 0; i < medicalRecords[recordId].allowedInsurers.length; i++) {
            if (medicalRecords[recordId].allowedInsurers[i] == insurerId) {
                indexToRemove = i;
                break;
            }
        }
        
        if (indexToRemove != type(uint).max) {
            address[] memory newAllowedInsurers = new address[](medicalRecords[recordId].allowedInsurers.length - 1);
            uint newIndex = 0;
            for (uint i = 0; i < medicalRecords[recordId].allowedInsurers.length; i++) {
                if (i != indexToRemove) {
                    newAllowedInsurers[newIndex] = medicalRecords[recordId].allowedInsurers[i];
                    newIndex++;
                }
            }
            medicalRecords[recordId].allowedInsurers = newAllowedInsurers;
        }
        
        emit RecordAccessRevoked(recordId, insurerId, msg.sender);
    }
    
    // Equipment functions
    function addEquipment(
        string memory name,
        string memory model,
        string memory serialNumber,
        string memory department,
        uint256 nextMaintenance
    ) 
        public 
        onlyHospital 
        activeUser 
    {
        equipmentCount++;
        
        equipments[equipmentCount] = Equipment({
            id: equipmentCount,
            name: name,
            model: model,
            serialNumber: serialNumber,
            department: department,
            lastMaintenance: block.timestamp,
            nextMaintenance: nextMaintenance,
            isActive: true
        });
        
        emit EquipmentAdded(equipmentCount, name, model);
    }
    
    function updateEquipmentMaintenance(uint256 equipmentId, uint256 nextMaintenance) 
        public 
        onlyHospital 
        activeUser 
    {
        require(equipments[equipmentId].id > 0, "Equipment does not exist");
        
        equipments[equipmentId].lastMaintenance = block.timestamp;
        equipments[equipmentId].nextMaintenance = nextMaintenance;
    }
    
    // Treatment functions
    function addTreatment(
        uint256 recordId,
        string memory treatmentType,
        string memory diagnosis,
        uint256[] memory equipmentIds,
        string memory prescriptionHash
    ) 
        public 
        onlyHospital 
        activeUser 
        canAccessRecord(recordId)
    {
        require(medicalRecords[recordId].hospitalId == msg.sender, "Only the hospital that created the record can add treatment");
        
        // Verify all equipment exists
        for (uint i = 0; i < equipmentIds.length; i++) {
            require(equipments[equipmentIds[i]].id > 0, "Equipment does not exist");
        }
        
        treatmentCount++;
        
        treatments[treatmentCount] = Treatment({
            id: treatmentCount,
            recordId: recordId,
            treatmentType: treatmentType,
            diagnosis: diagnosis,
            equipmentIds: equipmentIds,
            prescriptionHash: prescriptionHash,
            timestamp: block.timestamp
        });
        
        emit TreatmentAdded(treatmentCount, recordId, treatmentType);
    }
    
    // Insurance claim functions
    function submitClaim(
        uint256 recordId,
        uint256 amount,
        string memory claimHash
    ) 
        public 
        onlyPatient 
        activeUser 
        canAccessRecord(recordId)
    {
        require(medicalRecords[recordId].patientId == msg.sender, "You can only submit claims for your own records");
        require(medicalRecords[recordId].isVerified, "Record must be verified before submitting a claim");
        
        claimCount++;
        
        // Find the first allowed insurer to process the claim
        address insurerId = address(0);
        if (medicalRecords[recordId].allowedInsurers.length > 0) {
            insurerId = medicalRecords[recordId].allowedInsurers[0];
        }
        
        insuranceClaims[claimCount] = InsuranceClaim({
            id: claimCount,
            recordId: recordId,
            patientId: msg.sender,
            insurerId: insurerId,
            amount: amount,
            claimHash: claimHash,
            status: 0, // Pending
            timestamp: block.timestamp
        });
        
        emit ClaimSubmitted(claimCount, recordId, insurerId);
    }
    
    function processClaim(uint256 claimId, uint8 status) 
        public 
        onlyInsurance 
        activeUser
    {
        require(insuranceClaims[claimId].id > 0, "Claim does not exist");
        require(insuranceClaims[claimId].insurerId == msg.sender, "Only the assigned insurer can process this claim");
        require(status == 1 || status == 2, "Status must be either approved (1) or rejected (2)");
        require(insuranceClaims[claimId].status == 0, "Claim has already been processed");
        
        insuranceClaims[claimId].status = status;
        
        emit ClaimStatusUpdated(claimId, status);
    }
    
    // View functions
    function getUserRole(address userAddress) public view returns (uint8) {
        return users[userAddress].role;
    }
    
    function getRecordDetails(uint256 recordId) 
        public 
        view 
        canAccessRecord(recordId) 
        returns (
            uint256 id,
            address patientId,
            address hospitalId,
            string memory recordHash,
            string memory recordType,
            uint256 timestamp,
            bool isVerified,
            address[] memory allowedInsurers
        ) 
    {
        MedicalRecord memory record = medicalRecords[recordId];
        return (
            record.id,
            record.patientId,
            record.hospitalId,
            record.recordHash,
            record.recordType,
            record.timestamp,
            record.isVerified,
            record.allowedInsurers
        );
    }
    
    function getTreatmentDetails(uint256 treatmentId) 
        public 
        view 
        returns (
            uint256 id,
            uint256 recordId,
            string memory treatmentType,
            string memory diagnosis,
            uint256[] memory equipmentIds,
            string memory prescriptionHash,
            uint256 timestamp
        ) 
    {
        Treatment memory treatment = treatments[treatmentId];
        require(canAccessRecord(treatment.recordId), "You do not have access to this treatment");
        
        return (
            treatment.id,
            treatment.recordId,
            treatment.treatmentType,
            treatment.diagnosis,
            treatment.equipmentIds,
            treatment.prescriptionHash,
            treatment.timestamp
        );
    }
    
    function getClaimDetails(uint256 claimId) 
        public 
        view 
        returns (
            uint256 id,
            uint256 recordId,
            address patientId,
            address insurerId,
            uint256 amount,
            string memory claimHash,
            uint8 status,
            uint256 timestamp
        ) 
    {
        InsuranceClaim memory claim = insuranceClaims[claimId];
        
        // Only the patient, hospital of the record, or the insurer can view claim details
        require(
            claim.patientId == msg.sender || 
            medicalRecords[claim.recordId].hospitalId == msg.sender ||
            claim.insurerId == msg.sender,
            "You do not have access to this claim"
        );
        
        return (
            claim.id,
            claim.recordId,
            claim.patientId,
            claim.insurerId,
            claim.amount,
            claim.claimHash,
            claim.status,
            claim.timestamp
        );
    }
}