import { useState, useEffect } from "react";
import API_BASE_URL from "../utils/api";


export default function AdminGallery() {

    const [isAdmin, setIsAdmin] = useState(false);


    const [password, setPassword] = useState("");
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Campus");
    const [images, setImages] = useState([]);

    // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    // Load last 10 images
    const loadImages = () => {
        fetch(`${API_BASE_URL}/api/gallery`)
            .then(res => res.json())
            .then(setImages);
    };

    console.log(images)

    // refresh ke baad admin logout
    useEffect(() => {
        console.log("API BASE URL:", API_BASE_URL);
        const token = sessionStorage.getItem("adminToken");
        if (token === "ADMIN_LOGGED_IN") {
            setIsAdmin(true);
            loadImages();
        }
    }, []);

    // Admin login
    const login = async () => {
        if (!password) {
            alert("Password required");
            return;
        }

        const res = await fetch(`${API_BASE_URL}/api/admin-login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.error);
            return;
        }

        sessionStorage.setItem("adminToken", data.token);
        setIsAdmin(true);
        setPassword("");
        loadImages();
    };

    // Upload image
    const uploadImage = async () => {
        const token = sessionStorage.getItem("adminToken");

        if (!file) {
            alert("Please select an image");
            return;
        }

        if (file.size > 500 * 1024) {
            alert("Image must be less than 500KB");
            return;
        }

        const form = new FormData();
        form.append("image", file);
        form.append("title", title);
        form.append("category", category);

        const res = await fetch(`${API_BASE_URL}/api/upload`, {
            method: "POST",
            headers: {
                "x-admin-token": token,
            },
            body: form,
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.error || "Upload failed");
            return;
        }

        alert("Uploaded successfully!");
        setFile(null);
        loadImages();
    };

    // Delete Images -------
    const deleteImage = async (name) => {
        const token = sessionStorage.getItem("adminToken");
        if (!confirm("Delete permanently?")) return;

        const res = await fetch(`${API_BASE_URL}/api/delete`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-admin-token": token
            },
            body: JSON.stringify({ name })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.error || "Delete failed");
            return;
        }

        loadImages();
    };

    // Login screen
    if (!isAdmin) {
        return (
            <div className="p-10 max-w-md mx-auto">
                <h2 className="text-xl font-bold mb-3">Admin Login</h2>
                <input type="password" placeholder="Password" className="border p-2 w-full mb-3" onChange={e => setPassword(e.target.value)} />
                <button onClick={login} className="bg-amber-500 text-white px-4 py-2 rounded">Login</button>
            </div>
        );
    }

    return (
        <div className="p-10 space-y-6">
            <button
                onClick={() => {
                    sessionStorage.clear();   // 🔥 important
                    setIsAdmin(false);
                    setPassword("");          // password input reset
                }}
                className="bg-red-500 text-white px-3 py-1 rounded"
            >
                Logout
            </button>

            <h2 className="text-xl font-bold">Upload New Image</h2>
            <div className="flex items-center gap-3">
                {/* Hidden actual file input */}
                <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    onChange={e => setFile(e.target.files[0])}
                />

                {/* Custom button */}
                <label
                    htmlFor="fileInput"
                    className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Choose File
                </label>

                {/* Show selected file name */}
                <span className="text-gray-700">
                    {file ? file.name : "No file chosen"}
                </span>
            </div>

            <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} className="border p-2 w-full" />
            <select onChange={e => setCategory(e.target.value)} className="border p-2 w-full">
                <option>Campus</option>
                <option>School</option>
                <option>Engineering</option>
                <option>Health</option>
            </select>
            <button onClick={uploadImage} className="bg-green-500 text-white px-4 py-2 rounded">Upload</button>

            <h2 className="text-xl font-bold mt-6">Admin Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map(img => (
                    <div key={img.name} className="border p-2 rounded relative">
                        <img src={img.src.startsWith("http") ? img.src : `${API_BASE_URL}${img.src}`} loading="lazy"
                            decoding="async" className="h-40 w-full object-cover" />
                        <p className="font-semibold">{img.title}</p>
                        <p className="text-sm">{img.category}</p>
                        <p className="text-xs text-gray-500">
                            {new Date(img.createdAt).toLocaleString("en-IN")}
                        </p>

                        <button onClick={() => deleteImage(img.name)} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
