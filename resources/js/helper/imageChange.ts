
export const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, setData: any) => {
    if (!e.target.files) {
        return
    }
    const imageFile = e.target.files[0];
    if (imageFile) {
        const extension = imageFile.name.split(".").pop()?.toLowerCase();
        if (extension && ["jpg", "png", "gif", "jpeg"].includes(extension)) {
            setData("image", imageFile);
        } else {
            alert("Please select an image file");
            e.target.value = "";
        }
    }
};
