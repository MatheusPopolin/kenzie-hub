import { createContext } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { getUser } = useContext(UserContext);

  const techRegister = async (data, setLoading, setAddTechModalOpenned) => {
    try {
      setLoading(true);
      const token = window.localStorage.getItem("@KENZIEHUB:Token");
      const response = await api.post("users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Tecnologia cadastrada com sucesso");
      getUser();
      setTimeout(() => {
        setLoading(false);
        setAddTechModalOpenned(false);
      }, 1000);
    } catch (error) {
      toast.error("Tecnologia já cadastrada");
      setTimeout(() => setLoading(false), 1000);
    }
  };

  const techDelete = async (techId, setLoading, setViewTechModalOpenned) => {
    try {
      setLoading(true);
      const token = window.localStorage.getItem("@KENZIEHUB:Token");
      const response = await api.delete(`users/techs/${techId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Tecnologia deletada com sucesso");
      getUser();
      setTimeout(() => {
        setLoading(false);
        setViewTechModalOpenned(false);
      }, 1000);
    } catch (error) {
      toast.error("Algo de errado aconteceu");
      setTimeout(() => setLoading(false), 1000);
    }
  };

  const techUpdate = async (
    data,
    techId,
    setLoading,
    setViewTechModalOpenned
  ) => {
    try {
      setLoading(true);
      const token = window.localStorage.getItem("@KENZIEHUB:Token");
      const response = await api.put(`users/techs/${techId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Tecnologia atualizada com sucesso");
      getUser();
      setTimeout(() => {
        setLoading(false);
        setViewTechModalOpenned(false);
      }, 1000);
    } catch (error) {
      toast.error("Algo de errado aconteceu");
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <TechContext.Provider
      value={{
        techRegister,
        techDelete,
        techUpdate,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
