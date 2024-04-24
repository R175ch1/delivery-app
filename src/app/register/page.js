"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);
    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setCreatingUser(true);
        setError(false);
        setUserCreated(false);
            const response = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                setUserCreated(true);
            }
            else {
                setError(true);
            }
        setCreatingUser(false);
        }
        
    return (
        <section className="mt-8">
            <h1 className="text-center text-4xl">Registrieren</h1>
            {userCreated && (
                <div className="my-4 text-center">
                    Benutzer erfolgreich angelegt. <br />
                    Sie können sich jetzt <a href="/login" className="text-purple-800">
                        einloggen &raquo;</a></div>
            )}
            {error && (
                <div className="my-4 text-center">
                    Ein Fehler ist aufgetreten.<br />
                    Versuchen Sie es später erneut.
                </div>
            )}
            <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>

                <input type="email" placeholder="Email" value={email} 
                    disabled={creatingUser} 
                    onChange={ev => setEmail(ev.target.value)} />
                
                <input type="password" placeholder="Passwort" value={password} 
                    disabled={creatingUser} 
                    onChange={ev => setPassword(ev.target.value)} />
                
                <button type="submit" disabled={creatingUser}>
                    Registrieren</button>
                
                <p className="text-stone-500 my-6 text-center">oder loggen Sie sich mit Google ein</p>

                <button className="flex gap-4 justify-center">
                    <img src="/google.png" alt="google" width="24" height="24" />
                    Login mit Google
                </button>

            </form>
        </section >
    );
}