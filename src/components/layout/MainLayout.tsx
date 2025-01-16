'use client';

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

import Sidebar from "@/components/Sidebar";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <div className='flex h-screen overflow-hidden'>
            <Sidebar user={user?.email || ''} />
            <main className='flex-grow overflow-auto'>{children}</main>
        </div>
    );
}