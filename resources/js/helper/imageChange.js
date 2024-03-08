export const handleImageChange = (e, setData) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
        const extension = imageFile.name.split(".").pop().toLowerCase();
        if (["jpg", "png", "gif", "jpeg"].includes(extension)) {
            setData("image", imageFile);
        } else {
            alert("Please select an image file");
            e.target.value = null;
        }
    }
};
