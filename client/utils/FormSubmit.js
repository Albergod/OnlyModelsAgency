export const FORMSUBMIT = async (data) => {
  try {
    if (!data.Phonenumber)
      throw new Error("debe asignar un número de teléfono");
    if (!data.nacionality) throw new Error("debe asignar una nacionalidad");

    await fetch(
      "https://formsubmit.co/ajax/onlymodelsagencycontact@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: {
          phonenumber: data.Phonenumber,
          nacionality: data.nacionality,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
