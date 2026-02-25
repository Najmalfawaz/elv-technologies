'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, AlertCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Login successful!');
                router.push('/admin');
                router.refresh();
            } else {
                toast.error(data.error || 'Login failed');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-white dark:bg-slate-950">
            {/* Mesh Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-900/10 dark:bg-white/5 blur-[120px] rounded-full" />
            </div>

            <div className="w-full max-w-md space-y-8 relative z-10">
                <div className="text-center space-y-4">
                    <div className="flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-slate-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center">
                                <Lock className="h-8 w-8 text-red-600" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                            Admin <span className="text-red-600">Portal</span>
                        </h1>
                        <p className="mt-3 text-slate-500 dark:text-slate-400 text-lg">
                            Secure access to your dashboard
                        </p>
                    </div>
                </div>

                <Card className="border-white/20 dark:border-slate-800/50 shadow-2xl rounded-[2rem] overflow-hidden bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border">
                    <form onSubmit={handleLogin}>
                        <CardHeader className="space-y-1 pb-4 pt-8 px-8">
                            <CardTitle className="text-2xl font-bold">Authentication</CardTitle>
                            <CardDescription className="text-base">
                                Enter your credentials to manage content
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6 px-8">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                    Username
                                </label>
                                <Input
                                    type="text"
                                    placeholder="admin"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="h-14 bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-2xl focus-visible:ring-red-500/20 focus-visible:border-red-500 transition-all text-lg px-5"
                                    autoFocus
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                    Secure Password
                                </label>
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="h-14 bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-2xl focus-visible:ring-red-500/20 focus-visible:border-red-500 transition-all text-lg px-5"
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="pb-8 pt-2 px-8">
                            <Button
                                type="submit"
                                className="w-full h-14 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-2xl shadow-xl shadow-red-600/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                                        Authenticating...
                                    </>
                                ) : (
                                    'Sign In to Dashboard'
                                )}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>

                <div className="flex flex-col items-center gap-4">
                    <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">
                        © {new Date().getFullYear()} ELV Technology Solutions
                    </p>
                    <div className="flex gap-6">
                        <div className="h-1 w-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
                        <div className="h-1 w-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
                        <div className="h-1 w-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
