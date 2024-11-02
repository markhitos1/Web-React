

export const formatDate = objDate => {
    const date = new Date(objDate?.seconds * 1000);
   const hours = date.getHours();
   const minutes = date.getMinutes();
   
   const time = `${hours}:${minutes}`  

   
    const options = {
        month: 'long',
        day: 'numeric',
    }
    const newDate = date.toLocaleDateString('es-US',options);
    return `${newDate} - ${time}`;
}

