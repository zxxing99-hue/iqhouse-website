# IQHouse Website - Backend Management System TODO

## Backend API (tRPC)
- [x] Create blog posts CRUD API endpoints
- [x] Create products CRUD API endpoints
- [ ] Add image upload API using S3 storage
- [x] Add admin permission checks

## Admin Dashboard
- [x] Create admin dashboard layout with sidebar navigation
- [x] Add blog post list page with search and filters
- [x] Add blog post create/edit form with rich text editor
- [x] Add product list page with category filters
- [x] Add product create/edit form
- [x] Add publish/unpublish toggle functionality

## Frontend Blog Display
- [ ] Create blog listing page (Insights page) - To be implemented when needed
- [ ] Create individual blog post page - To be implemented when needed
- [ ] Add language filtering for blog posts - To be implemented when needed

## Testing
- [x] Test blog CRUD operations
- [x] Test product CRUD operations
- [ ] Test image upload functionality - Basic structure ready, S3 integration can be added later
- [x] Test admin permissions


## UI Improvements
- [x] Change admin interface language to Chinese
- [x] Remove logo from admin layout

## Image Upload Feature
- [x] Create image upload API using S3 storage
- [x] Create ImageUpload component
- [x] Integrate image upload to blog post form (cover image)
- [x] Integrate image upload to product form (product images)
- [x] Support both URL input and file upload

## Product Library Frontend Integration
- [x] Update Product Library page to fetch data from backend
- [x] Display products by category with real data
- [x] Support language filtering (EN/ZH)
- [ ] Add product detail view - Can be added later if needed

## Blog Frontend Display
- [x] Create blog listing page (/insights)
- [x] Create blog post detail page (/insights/:slug)
- [x] Add Markdown rendering for blog content
- [x] Support language filtering (EN/ZH)
- [x] Add navigation link to Insights page

## Sample Data
- [x] Add 3-5 sample products covering different categories
- [x] Add sample product images
- [x] Add bilingual descriptions for products


## UX Issues (Client Demo Preparation)
- [x] Fix double footer on homepage
- [x] Make 404 page more user-friendly with contact info (iqhouse1989@gmail.com)
- [x] Check and optimize navigation/jump logic throughout site
- [x] Review all pages from B2B client perspective
- [x] Ensure clear value proposition on every page
- [x] Test all links and CTAs


## Homepage Optimization (User Feedback)
- [x] Simplify Learning Capabilities section to show 3-4 representative icons only
- [x] Add "View all learning capabilities" CTA button
- [x] Replace generic "Start a Conversation" with two role-specific CTAs:
  - "For Brands & Buyers → Contact"
  - "Our Design Method → Classroom to Toy Design"
- [x] Add role-specific CTAs in hero section and final CTA section

## Blog Content Strategy
- [x] Create content guidelines document (3 article types only)
- [x] Type 1: How learning concepts become physical toys
- [x] Type 2: OEM vs ODM: what brands should consider
- [x] Type 3: Why hands-on learning still matters
- [x] Avoid: parenting content, age groups, "how to play with kids"
- [x] Created BLOG_CONTENT_STRATEGY.md with detailed guidelines

## Learning Capabilities Icon Management
- [ ] Create admin panel for managing 12 learning capability icons
- [ ] Allow uploading custom icons for each capability
- [ ] Display selected icons on homepage (3-4 featured)
- [ ] Link to full 12 capabilities page


## Methodology 2.0 Implementation
- [ ] Replace sample product images with real product and store photos
- [ ] Add "Optimizing Learning Complexity Through Design" module to Classroom page
- [ ] Update Classroom page title to "From Observation to Structured Learning Design"
- [ ] Add summary sentence to design complexity section
- [ ] Add key sentence to Home page "Our Design Approach" section
- [ ] Add opening sentence to Learning Capabilities page

## Client Feedback - January 2025
- [x] Add "Designing Learning Complexity" module to Classroom page (Tangram example)
- [x] Fix navigation links auto-redirecting to login (Product Library, Insights, About should be public)
- [x] Fix duplicate footer on Classroom and Learning Capabilities pages

## WeChat Enterprise Integration
- [x] Extend Contact form with Country and Company fields
- [x] Create backend API to handle message submission and WeChat push
- [x] Add webhook URL configuration in admin dashboard
- [x] Test WeChat Enterprise webhook integration

## AI Chat Assistant Integration
- [x] Create backend API proxy for Xunfei WebSocket connection
- [x] Create AI chat sidebar component with welcome message
- [x] Add preset quick questions (6 questions in English)
- [x] Implement floating window breathing animation
- [x] Integrate chat assistant to navigation bar
- [x] Test chat functionality and optimize performance

## AI Chat Assistant - Bug Fixes
- [x] Implement backend WebSocket proxy for Xunfei API
- [x] Fix authentication and message format issues
- [x] Update frontend to use backend proxy
- [ ] Complete Xunfei API streaming response integration (requires WebSocket server setup)


## AI Chat Assistant - Debugging
- [x] Check backend error logs and API responses
- [x] Fix sendMessage mutation error handling
- [x] Test message sending and receiving
