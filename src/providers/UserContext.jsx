import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api"
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  const userLogin = async (data, setLoading) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", data);
      setUser(response.data.user);
      window.localStorage.clear();
      window.localStorage.setItem("@KENZIEHUB:Token", response.data.token);
      window.localStorage.setItem("@KENZIEHUB:UserID", response.data.user.id);
      toast.success("Login bem sucedido");
      setTimeout(() => navigate(`/dashboard/${response.data.user.id}`), 1000);
    } catch (error) {
      toast.error("Email ou senha inválidos");
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  const userRegister = async (formData, setLoading) => {
    const { name, email, password, bio, contact, course_module } = formData;
    const userData = {
      name: name,
      email: email,
      password: password,
      bio: bio,
      contact: contact,
      course_module: course_module,
    };
    try {
      setLoading(true);
      const response = await api.post("users", userData);
      toast.success("Cadastro realizado com sucesso!");
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      toast.error("Email já cadastrado");
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, userLogin, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};
