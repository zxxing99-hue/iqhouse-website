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


## Blog Cover Image Upload & Crop Feature
- [x] Add local image upload support for blog covers
- [x] Implement image crop editor with preview
- [x] Define cover image dimensions (recommended: 1200x630px)
- [x] Integrate crop tool into blog editor
- [x] Test upload and crop functionality


## Bug Fixes - Image Crop Canvas Error
- [x] Fix Canvas tainted error when cropping images
- [x] Support cross-origin images with proper CORS handling
- [x] Use blob-based approach instead of canvas toDataURL
- [x] Test crop functionality with various image sources


## Legal Pages & Company Information
- [x] Create Terms of Service page
- [x] Create Privacy Policy page (GDPR compliant)
- [x] Add company address to footer and contact page
- [x] Display WhatsApp number (+44 7925 192549) directly on pages
- [x] Add legal links to navigation/footer
- [x] Test and verify all legal pages

## Footer Layout Optimization
- [x] Consolidate company address, legal links, and contact info into "Connect" section
- [x] Remove separate "Company Address", "Legal", and "Get in Touch" blocks
- [x] Simplify footer structure to avoid redundancy
- [x] Test footer layout on mobile and desktop


## Footer Design Refinement (Premium B2B Standard)
- [x] Restructure right section: Contact + Social + Legal (smaller) as one group
- [x] Simplify Quick Links to 5 key items (OEM & ODM, Capabilities, Product Library, About, Contact)
- [x] Optimize typography: titles 12-13px with letter-spacing 0.08-0.12em, body 14-16px with line-height 1.6
- [x] Add brand positioning statement to left section
- [x] Perfect icon alignment with fixed width and consistent baseline
- [x] Optimize social links display (small icons only, keep WhatsApp number visible)
- [x] Simplify dividers (max one main divider, use spacing for grouping)
- [x] Left-align copyright with left grid for premium feel
- [x] Remove address from footer, keep only in Contact page form
- [x] Test footer on mobile and desktop


## Contact Page - Add Company Address
- [x] Add company address section to Contact page contact methods
- [x] Display address in bilingual format (English/Chinese)
- [x] Format: LEARNING AGE INTERNATIONAL CO., LTD. with full address
- [x] Test display on mobile and desktop


## Google Ads 转化追踪 - 成功页面实现
- [x] 更新数据库schema添加successPage配置表（title, description, image, video等）
- [x] 创建后端API获取和更新成功页面配置
- [x] 创建独立成功页面组件（/thank-you）
- [x] 修改Contact表单提交逻辑，成功后重定向到成功页面
- [x] 在后台管理系统添加成功页面配置界面
- [x] 支持后台配置：标题、描述文字、图片、视频
- [x] 编写并通过单元测试
- [x] 验证表单提交和成功页面重定向流程


## Google Ads / Google Tag (gtag) 集成
- [x] 在client/index.html全局head区域添加Google tag脚本
- [x] 验证gtag代码在所有页面加载（包括Insights、Contact、Thank You）
- [x] 测试gtag在浏览器控制台正常初始化
