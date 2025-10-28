"use client";

import { useAuth } from './AuthProvider';
import Link from 'next/link';

export default function AuthAwareAdminLink() {
  const { user, loading } = useAuth();

  if (loading) {
    return null; // Don't show anything while checking
  }

  return (
    <Link
      href={user ? "/admin" : "/auth/login"}
      className="text-gray-500 hover:text-[#6a5cff] text-xs transition-colors duration-200 cursor-pointer"
    >
      {user ? "Dashboard" : "Admin"}
    </Link>
  );
}