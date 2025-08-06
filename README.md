# GitHub vs GitLab Migration Analysis

A modularized React/Next.js application for comparing GitHub and GitLab platforms for enterprise migration decisions, specifically focused on .NET development environments.

## 🏗️ Architecture

The application has been modularized into the following structure:

### 📁 Directory Structure

```
src/
├── types/           # TypeScript interfaces and types
├── data/            # Data files and constants
├── components/      # Reusable React components
└── app/            # Next.js app directory
```

### 🔧 Components

#### Core Components

- **CostCard**: Displays cost comparison information
- **AICard**: Displays AI/ML capabilities comparison
- **PlatformCard**: Comprehensive platform comparison card
- **TabNavigation**: Tab-based navigation component

#### Section Components

- **OverviewSection**: Main comparison overview
- **CostsSection**: Detailed cost analysis
- **AISection**: AI/ML capabilities analysis

### 📊 Data Structure

#### Types (`src/types/index.ts`)

- `SpreadsheetData`: Original spreadsheet data structure
- `CostData`: Cost information interface
- `ResearchData`: Research data structure
- `PlatformData`: Platform comparison data
- `TabItem`: Navigation tab interface

#### Data Files

- `spreadsheetData.ts`: Original spreadsheet data
- `researchData.ts`: Market research and pricing data

## 🚀 Features

### 📈 Comparison Areas

1. **Overview**: Side-by-side platform comparison
2. **Costs**: Detailed cost analysis for 47 users
3. **AI Resources**: GitHub Copilot vs GitLab Duo comparison

### 🎯 Key Insights

- **GitHub Enterprise Cloud**: Recommended option
- **Cost Analysis**: Detailed breakdown for enterprise plans
- **AI Integration**: Focus on .NET development capabilities

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Running the Application

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## 📋 Data Sources

### Pricing Information

- GitLab Ultimate: $99/user/month
- GitHub Enterprise Cloud: $21/user/month
- GitHub Copilot Enterprise: $39/user/month
- Exchange rate: 1 USD = 5.50 BRL

### Research Basis

- 47 enterprise users
- .NET Framework to .NET Core migration focus
- Enterprise security requirements
- AI/ML integration needs

## 🎨 UI/UX Features

### Responsive Design

- Mobile-friendly layout
- Horizontal scrolling for comparison cards
- Tab-based navigation

### Visual Indicators

- Color-coded platform cards (GitLab: Orange, GitHub: Gray)
- Rating systems for AI capabilities
- Cost comparison with detailed breakdowns
- Security pros/cons visualization

## 🔄 Migration from Original

The original monolithic component (`remixed-ca8a2514.tsx`) has been broken down into:

1. **Data Separation**: Moved all data to dedicated files
2. **Component Modularization**: Created reusable components
3. **Type Safety**: Added TypeScript interfaces
4. **Maintainability**: Improved code organization and readability

## 📝 Usage

The application provides a comprehensive analysis tool for enterprise decision-makers evaluating GitHub vs GitLab migration options. The modular structure allows for easy updates to pricing, features, or comparison criteria.

## 🤝 Contributing

To add new comparison criteria or update data:

1. Update the appropriate data file in `src/data/`
2. Add new types if needed in `src/types/`
3. Create new components in `src/components/` if required
4. Update the main page to include new sections

## 📄 License

This project is for internal enterprise analysis and comparison purposes.
