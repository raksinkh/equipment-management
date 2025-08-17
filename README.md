# Scientific Equipment Management System

A modern web application for managing scientific equipment, user bookings, and approval workflows. Built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Features

### Core Functionality
- **User Authentication**: Secure login system with role-based access (User/Manager)
- **Equipment Management**: Add, edit, delete, and track equipment status
- **Booking System**: Request equipment usage with approval workflow
- **Real-time Updates**: Live status updates and notifications
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### User Roles
- **Users**: Can view available equipment and submit booking requests
- **Managers**: Can approve/reject bookings, manage equipment, and view all data

### Equipment Features
- Equipment status tracking (Available, Borrowed, Maintenance)
- Location-based organization
- Detailed descriptions and specifications
- Booking history and usage statistics

### Booking System
- Date range selection with conflict prevention
- Purpose and notes for each request
- Status tracking (Pending, Approved, Rejected, Completed)
- Automatic equipment status updates

### Notifications
- Email notifications for managers (Resend integration)
- LINE push notifications (LINE Notify integration)
- In-app notification system

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ and npm
- Supabase account (free tier available)
- Resend account for email notifications (optional)
- LINE Notify token for push notifications (optional)

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd equipment-management
npm install
```

### 2. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Get your project URL and anon key from Settings > API
3. Copy `env.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
RESEND_API_KEY=your_resend_api_key_here
LINE_NOTIFY_TOKEN=your_line_notify_token_here
```

### 3. Set Up Database

1. Go to your Supabase project SQL Editor
2. Copy and paste the contents of `database-schema.sql`
3. Run the SQL script to create all tables and policies

### 4. Create Manager User

1. Go to Authentication > Users in Supabase
2. Create a new user with email `manager@example.com`
3. Go to SQL Editor and run:
```sql
UPDATE public.users SET role = 'manager' WHERE email = 'manager@example.com';
```

### 5. Run the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Schema

### Tables

- **users**: User profiles and roles
- **equipment**: Equipment inventory and status
- **bookings**: Equipment booking requests and approvals
- **notifications**: System notifications and alerts

### Key Relationships

- Users can have multiple bookings
- Equipment can have multiple bookings (over time)
- Bookings link users to equipment with date ranges
- Notifications are linked to specific users

## 🔐 Authentication & Security

- **Row Level Security (RLS)**: Database-level access control
- **JWT Tokens**: Secure authentication with Supabase Auth
- **Role-based Access**: Different permissions for users vs managers
- **Secure API Routes**: Protected endpoints with proper validation

## 📧 Email & LINE Notifications

### Email Setup (Resend)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`

### LINE Notifications
1. Go to [notify-bot.line.me](https://notify-bot.line.me)
2. Create a new LINE Notify service
3. Get your token and add to `.env.local`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Usage Guide

### For Users
1. **Login**: Use your email and password
2. **Browse Equipment**: View available equipment and their details
3. **Request Booking**: Select equipment, dates, and provide purpose
4. **Track Status**: Monitor your booking approval status
5. **Return Equipment**: Mark equipment as returned when done

### For Managers
1. **Login**: Use manager credentials
2. **Review Requests**: See pending booking requests
3. **Approve/Reject**: Make decisions on equipment usage
4. **Manage Equipment**: Add, edit, or remove equipment
5. **Monitor Usage**: Track equipment utilization and history

## 🔧 Customization

### Adding New Equipment Types
1. Modify the `Equipment` interface in `src/lib/supabase.ts`
2. Update the database schema if needed
3. Modify forms and displays accordingly

### Custom Notifications
1. Add new notification types to the enum
2. Create notification templates
3. Integrate with additional services

### Styling
- Modify `tailwind.config.js` for custom colors and fonts
- Update component styles in individual files
- Use CSS modules or styled-components for complex styling

## 🐛 Troubleshooting

### Common Issues

**"Supabase connection failed"**
- Check your environment variables
- Verify Supabase project is active
- Check network connectivity

**"Authentication not working"**
- Ensure RLS policies are properly set
- Check user creation trigger
- Verify JWT configuration

**"Booking creation fails"**
- Check database constraints
- Verify user permissions
- Check equipment availability

### Debug Mode

Enable debug logging by adding to `.env.local`:
```env
NEXT_PUBLIC_DEBUG=true
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Documentation**: Check this README and code comments
- **Issues**: Create GitHub issues for bugs or feature requests
- **Community**: Join our discussion forum

## 🗺️ Roadmap

### Phase 2 Features
- [ ] Calendar view for equipment availability
- [ ] Bulk equipment import/export
- [ ] Advanced reporting and analytics
- [ ] Mobile app (React Native)
- [ ] QR code scanning for equipment
- [ ] Maintenance scheduling
- [ ] Equipment usage analytics

### Phase 3 Features
- [ ] Multi-location support
- [ ] Advanced user management
- [ ] Integration with lab management systems
- [ ] API for third-party integrations
- [ ] Advanced notification preferences

---

**Built with ❤️ for the scientific community**
