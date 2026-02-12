// =====================================================
// HOSPITALITY BI - SOURCE DECLARATIONS
// =====================================================

const { PROJECT, SCHEMAS } = require("../../includes/constants");

// =====================================================
// NEW RAW TABLES (from Cloud Function → hospitality_raw)
// =====================================================
const newRawTables = [
  { name: "raw_booked_reservations", description: "Raw reservation data from Cloud Function" },
  { name: "raw_revenue_segment_summary", description: "Revenue segment summary from Cloud Function" },
  { name: "raw_occupancy_past", description: "Past occupancy data from Cloud Function" },
  { name: "raw_occupancy_future", description: "Future occupancy data from Cloud Function" },
  { name: "raw_travel_agent_checkout", description: "Travel agent checkout from Cloud Function" },
  { name: "raw_vip_guest_details", description: "VIP guest details from Cloud Function" }
];

newRawTables.forEach(table => {
  declare({
    database: PROJECT,
    schema: SCHEMAS.RAW,
    name: table.name,
    description: table.description
  });
});

// =====================================================
// LEGACY RAW TABLES (hospitality_data - keep for backup)
// =====================================================
const legacyRawTables = [
  { name: "bookedresclean", description: "Raw reservation data from HotelKey PMS" },
  { name: "raw_revenue_segment_summary", description: "Revenue segment summary from PMS" },
  { name: "raw_travel_agent_checkout", description: "Travel agent checkout data" },
  { name: "QualityIndex", description: "Room quality index mapping" }
];

// DIMENSION TABLES
const dimensionTables = [
  { name: "Dim_Date", description: "Date dimension" },
  { name: "Dim_Events_Calendar", description: "Events, holidays, school breaks" },
  { name: "Dim_Guest", description: "Guest master data" },
  { name: "Dim_MarketSegment", description: "Market segment definitions" },
  { name: "Dim_RatePlan", description: "Rate plan definitions" },
  { name: "Dim_ReservationStatus", description: "Reservation status codes" },
  { name: "Dim_RoomType", description: "Room type definitions" },
  { name: "Dim_RoomType_SubstitutionGroups", description: "Room substitution groups" },
  { name: "Dim_RoomType_Substitutions", description: "Room substitution mappings" },
  { name: "Dim_Source", description: "Booking source definitions" },
  { name: "Dim_TravelAgent", description: "Travel agent master data" }
];

// FACT TABLES
const factTables = [
  { name: "Fact_Reservations", description: "Core reservation fact table" },
  { name: "Fact_Daily_Property_Snapshot", description: "Property-level daily KPIs" },
  { name: "Fact_Daily_RoomType_Snapshot", description: "Room type level daily KPIs" },
  { name: "Fact_Occupancy_Snapshot", description: "Occupancy by room type and date" },
  { name: "Fact_Revenue_Segment_Daily", description: "Revenue by segment/room type/date" },
  { name: "Fact_Booking_Pace_Daily_Snapshot", description: "Booking pace with STLY" },
  { name: "Fact_Guest_Metrics_Lifetime", description: "Guest lifetime value metrics" },
  { name: "Fact_VIPGuests", description: "VIP guest tracking" },
  { name: "Fact_TravelAgentCheckout", description: "Travel agent commissions" }
];

// UTILITY TABLES
const utilityTables = [
  { name: "audit_log", description: "Data pipeline audit trail" }
];

// DECLARE ALL LEGACY TABLES
const legacyTables = [...legacyRawTables, ...dimensionTables, ...factTables, ...utilityTables];

legacyTables.forEach(table => {
  declare({
    database: PROJECT,
    schema: SCHEMAS.LEGACY,
    name: table.name,
    description: table.description
  });
});

// =====================================================
// CONFIG TABLES (hospitality_marts - corporate governance)
// =====================================================
const configTables = [
  { name: "bridge_rate_room_eligibility", description: "Rate plan to room type eligibility rules" },
  { name: "bridge_rate_room_eligibility_history", description: "Audit history for eligibility changes" },
  { name: "config_change_requests", description: "Change request workflow tracking" },
  { name: "config_market_segment", description: "Market segment classification config table" }
];

configTables.forEach(table => {
  declare({
    database: PROJECT,
    schema: SCHEMAS.MARTS,
    name: table.name,
    description: table.description
  });
});