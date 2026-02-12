# Hospitality Analytics - Dataform Pipeline

Modern data transformation pipeline for hospitality revenue analytics, built with Dataform (dbt alternative) on Google BigQuery.

## Overview

This repository contains the complete data transformation logic for a 300+ unit luxury vacation rental property, implementing a 4-layer architecture:

- **Raw Layer:** Untransformed source data from PMS exports
- **Staging Layer:** Cleaned, validated, and typed data
- **Marts Layer:** Business logic applied with dimensional modeling
- **Reporting Layer:** Dashboard-ready views optimized for analytics

## Architecture

```
Cloud Storage → Cloud Function → BigQuery Raw
                                      ↓
                              Dataform Transforms
                                      ↓
                    Staging → Marts → Reporting
                                      ↓
                              Looker Studio Dashboards
```

## Key Features

- **Automated ETL:** Event-driven + scheduled transformations
- **Data Quality:** Built-in assertions and validation checks
- **Dimensional Modeling:** Star schema with fact/dimension tables
- **Audit Trail:** Complete lineage tracking
- **Modular Design:** Reusable transformations and constants

## Tech Stack

- **Dataform:** SQL transformation framework (dbt alternative)
- **BigQuery:** Cloud data warehouse (OLAP)
- **Google Cloud Functions:** Serverless data ingestion
- **Looker Studio:** Business intelligence dashboards

## Project Structure

```
definitions/
  ├── staging/        # Data cleaning and validation
  ├── marts/          # Business logic and dimensions
  │   ├── core/       # Core fact tables
  │   ├── dimensions/ # Dimension tables
  │   └── intelligence/ # Advanced analytics
  ├── reporting/      # Dashboard-ready views
  ├── sources/        # Source table declarations
  └── assertions/     # Data quality checks
includes/
  └── constants.js    # Shared configuration
tests/
  └── *.sqlx          # Custom test assertions
```

## Highlights

- **100+ tables and views** across 4 datasets
- **Dual-trigger pipeline** (scheduled + event-driven)
- **Complete audit trail** for all transformations
- **Data quality monitoring** with automated alerts
- **Production-grade** error handling and validation

Built by Sofia Solis | [Portfolio](https://sofiasolisdata.com)
