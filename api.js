const API = "http://10.0.2.2:3000/persons";

export const getPersons = async () => {
    const res = await fetch(API);
    return await res.json();
};

export const getPerson = async (dni) => {
    const res = await fetch(`${API}/${dni}`);
    return await res.json();
};

export const savePersons = async (newPerson) => {
    const res = await fetch(API, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(newPerson),
    });
    return await res.json();
};

export const deletePersons = async (dni) => {
    await fetch(`${API}/${dni}`, {
        method: "DELETE",
    });
};

export const updatePersons = async (dni, newPerson) => {
    const res = await fetch(`${API}/${dni}`, {
        method: "PUT",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(newPerson),
    });
    return res;
};
