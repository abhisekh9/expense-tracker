"use client";
import { useAuth } from "@clerk/nextjs";

function DashboardHeader() {
    const { signOut } = useAuth(); 

    return (
        <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
            <h1 className="text-3xl font-bold text-black-800">Dashboard</h1>
            <button 
                onClick={() => signOut(() => window.location.href = "/")} 
                className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-400 transition font-medium"
            >
                Sign Out
            </button>
        </div>
    );
};

export default DashboardHeader;
