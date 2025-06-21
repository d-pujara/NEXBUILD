# AI-Powered Construction Management Platform - UI/UX Specification

This document outlines the core user interface and experience design for a modern, AI-driven construction management platform. The application serves as a "smart general contractor" and helps schedule tasks, track code compliance, manage submittals and RFIs, and facilitate real-time collaboration among project stakeholders.

## Visual Design Language

- **Aesthetic**: Minimalist industrial with architectural flair reminiscent of Notion and Autodesk.
- **Color Palette**: Muted blues, concrete grays, and soft off-whites.
- **Typography**: Legible sans-serif fonts such as Inter or IBM Plex Sans.
- **Icons**: Line-based icons providing clear affordances for navigation.
- **UI Toolkit**: TailwindCSS or Material UI with a custom design system to evoke precision and structure.

## Core Navigation

A left sidebar houses the main navigation. Each icon is labeled, collapsible, and includes smart tooltips with shortcut keys.

1. **Dashboard**
2. **Project Hub**
3. **Schedule**
4. **Model Viewer**
5. **Code Compliance**
6. **Submittals**
7. **RFIs**
8. **Chat / Collaboration**
9. **Settings**

## 1. Dashboard

The dashboard provides an immediate overview of critical tasks and AI insights.

- **Today’s Priority Tasks**: Sortable by trade.
- **Gantt Snippet of Critical Path**: Quick view of schedule status.
- **AI Insights**: e.g., "Excavation is trending 2 days behind due to late inspection." 
- **Weather Delay Risk**: Pulled from NOAA.
- **Material Arrival Timeline**: Highlights key deliveries.
- **Permitting Status Heatmap**: Visual indicators of permit progress.

## 2. Project Hub

Projects are displayed in a card-based layout.

Each card includes:

- Project name and location
- Percent completion ring
- Active schedule flags (e.g., red if delayed)
- Latest model change snippet
- Assigned project manager

Selecting a card opens the full project workspace.

## 3. Schedule (AI-Assisted)

An interactive Gantt chart with filters and AI-generated suggestions.

- **Interactive Gantt Chart**: Zoomable timeline.
- **Task List Panel**: Expand tasks with AI-suggested notes.
- **Top Bar Filters**: Trade, priority, delays, critical path.
- **Task Details on Click**:
  - Dependencies tree
  - Material lead time linkage
  - AI-generated resequencing suggestions (toggle to accept/reject)
  - Notes and chat threads with attachments.

## 4. Code Compliance Panel

The platform automatically flags potential code issues.

- **Drawing Upload or Model Dropzone**
- **Region Selector**: Auto-detects by address.
- **Rules Panel**: Filters for fire, accessibility, egress, and zoning.
- **Flag List**: Example - "Wall W14 exceeds 1-hr rating requirement by 30%."
- **Flag Details**: Code reference, explanation, suggested fix, and link to the relevant drawing or model view.

## 5. 3D Model Viewer + Change Tracker

Real-time model viewing and tracking of design iterations.

- Toggle versions and compare side by side.
- Zoom, orbit, and section cut tools.
- Change list with timestamps, e.g., "Added window Win-05 to Wall W22."
- Layer toggle for structure, MEP, and sitework.
- AI notes such as "Window addition may cause egress noncompliance."

## 6. Submittal Generator

A wizard-driven interface for creating submittals.

- Select project type and auto-populate city/agency requirements.
- AI-assisted form fill for required documents.
- Automatic transmittal generation with response tracking.
- Status indicators: Submitted, In Review, Approved, Needs Revision.

## 7. RFI Manager

A table-based system for managing RFIs.

- Sort and filter by RFI number, sheet, detail, or assignee.
- AI-generated draft RFI content (editable before sending).
- Response tracker with attachments for photos or markups.
- Export as PDF or send directly to the architect.

## 8. Chat & Collaboration

Communication tools for project teams.

- Slack-like UI with channels per trade and task-based threads.
- Tag team members and assign tasks inline.
- Auto-translate construction slang into plain English for clients.
- Voice memo uploads with automatic transcription and summary.

## Settings / Admin Panel

- **Role-Based Permissions**: Architect, GC, subcontractor, and owner roles.
- **AI Preference Tuning**: Adjust schedule optimizer and notification style.
- **Integrations**: Procore, Revit, AutoCAD, Google Drive.
- **API Access Keys** for third-party integrations.

