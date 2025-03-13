import { useState, useEffect } from "react";
import { Button, TextField, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";

const Register = () => {
    const [formData, setFormData] = useState({
        name: localStorage.getItem("name") || "",
        phone: localStorage.getItem("phone") || ""
    });
    const [errors, setErrors] = useState({ name: false, phone: false });
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("registered") === "true") {
            navigate("/home");
        }
    }, [navigate]);

    useEffect(() => {
        localStorage.setItem("name", formData.name);
        localStorage.setItem("phone", formData.phone);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "phone" && !/^\d*$/.test(value)) return;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        const newErrors = {
            name: formData.name.trim() === "",
            phone: formData.phone.trim() === ""
        };
        setErrors(newErrors);

        if (!newErrors.name && !newErrors.phone) {
            localStorage.setItem("registered", "true");
            navigate("/home");
        }
    };

    return (
        <div className="register">
            <div className="modal">
                <h2>Регистрация</h2>
                <img src={avatar} alt="Avatar" />
                <TextField 
                    size="small" 
                    className="input" 
                    label="Имя" 
                    variant="outlined" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    helperText={errors.name ? "Поле обязательно для заполнения" : ""}
                />
                <TextField 
                    size="small" 
                    className="input" 
                    label="Номер телефона" 
                    variant="outlined" 
                    name="phone"
                    sx={{width:"223px"}}
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    helperText={errors.phone ? "Поле обязательно для заполнения" : ""}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">+</InputAdornment>
                    }}
                />
                <Button className="btn" variant="contained" onClick={handleSubmit}>
                    Зарегистрироваться
                </Button>
            </div>
        </div>
    );
};

export default Register;
