// =====================================================
// HOSPITALITY ANALYTICS - SHARED CONSTANTS
// =====================================================
// Central configuration for all Dataform definitions
// Update here to propagate changes across the project

const PROJECT = "your-gcp-project-id";

// Dataset schemas
const SCHEMAS = {
  RAW: "hospitality_raw",
  STAGING: "hospitality_staging",
  MARTS: "hospitality_marts",
  REPORTING: "hospitality_reporting",
  LEGACY: "hospitality_data"
};

// Room type categorization (example codes - sanitized for portfolio)
const ROOM_TYPE_FLATS = ['FLAT_2BR_001', 'FLAT_2BR_002', 'FLAT_2BR_003', 'FLAT_1BR_001', 'FLAT_1BR_002'];
const ROOM_TYPE_HOUSES = ['HOUSE_4BR_001', 'HOUSE_5BR_001', 'HOUSE_6BR_001', 'HOUSE_7BR_001'];
const ROOM_TYPE_VILLAS = ['VILLA_8BR_001', 'VILLA_9BR_001', 'VILLA_10BR_001', 'VILLA_11BR_001'];

// Active booking statuses
const ACTIVE_STATUSES = ['ARRIVAL', 'IN HOUSE', 'CHECKED OUT', 'RESERVED'];

// Channel mappings
const DIRECT_CHANNELS = ['WEBSITE', 'CALL CENTER', 'RACK'];
const OTA_CHANNELS = ['EXPEDIA', 'BOOKING', 'AIRBNB', 'VRBO', 'OTA'];
const COMP_SEGMENTS = ['COMP', 'EMPLOYEE'];

module.exports = {
  PROJECT,
  SCHEMAS,
  ROOM_TYPE_FLATS,
  ROOM_TYPE_HOUSES,
  ROOM_TYPE_VILLAS,
  ACTIVE_STATUSES,
  DIRECT_CHANNELS,
  OTA_CHANNELS,
  COMP_SEGMENTS
};