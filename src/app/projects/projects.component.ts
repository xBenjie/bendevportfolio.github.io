import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description:
        'A full-stack e-commerce platform with user authentication, shopping cart, and payment integration. Features include product catalog, order management, and admin dashboard.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      imageUrl:
        'https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+App',
      githubUrl: 'https://github.com/username/ecommerce-app',
      liveUrl: 'https://my-ecommerce-demo.netlify.app',
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Includes analytics and reporting.',
      technologies: [
        'React',
        'TypeScript',
        'Firebase',
        'Material-UI',
        'Socket.io',
      ],
      imageUrl:
        'https://via.placeholder.com/400x250/059669/ffffff?text=Task+Manager',
      githubUrl: 'https://github.com/username/task-manager',
      liveUrl: 'https://task-dashboard-demo.vercel.app',
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description:
        'A responsive weather application that provides current weather conditions and 7-day forecasts. Features location-based weather, interactive maps, and weather alerts.',
      technologies: [
        'Vue.js',
        'JavaScript',
        'OpenWeather API',
        'Chart.js',
        'PWA',
      ],
      imageUrl:
        'https://via.placeholder.com/400x250/dc2626/ffffff?text=Weather+App',
      githubUrl: 'https://github.com/username/weather-app',
      liveUrl: 'https://weather-forecast-pwa.netlify.app',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing projects and skills. Built with performance optimization, SEO best practices, and smooth animations.',
      technologies: [
        'Angular',
        'TypeScript',
        'SCSS',
        'Angular Animations',
        'PWA',
      ],
      imageUrl:
        'https://via.placeholder.com/400x250/7c3aed/ffffff?text=Portfolio+Site',
      githubUrl: 'https://github.com/username/portfolio',
      liveUrl: 'https://my-portfolio.dev',
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description:
        'A comprehensive social media analytics dashboard with data visualization, engagement metrics, and automated reporting features for multiple platforms.',
      technologies: ['Next.js', 'Python', 'Django', 'PostgreSQL', 'D3.js'],
      imageUrl:
        'https://via.placeholder.com/400x250/ea580c/ffffff?text=Social+Dashboard',
      githubUrl: 'https://github.com/username/social-dashboard',
    },
    {
      id: 6,
      title: 'Fitness Tracker Mobile App',
      description:
        'A cross-platform mobile application for tracking workouts, nutrition, and fitness goals. Includes workout plans, progress tracking, and social features.',
      technologies: [
        'React Native',
        'Expo',
        'Node.js',
        'SQLite',
        'Health APIs',
      ],
      imageUrl:
        'https://via.placeholder.com/400x250/16a34a/ffffff?text=Fitness+Tracker',
      githubUrl: 'https://github.com/username/fitness-tracker',
    },
  ];
}
