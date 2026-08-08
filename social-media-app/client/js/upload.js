const button = document.getElementById("uploadButton");

button.addEventListener("click", async (event) => {

    event.preventDefault();

    const imageInput = document.getElementById("image");

    if (!imageInput.files.length) {
        alert("Please select an image.");
        return;
    }

    const formData = new FormData();

    formData.append("image", imageInput.files[0]);

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/api/upload/image",
            
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        console.log(data);

        const preview = document.getElementById("preview");

        preview.src =
            preview.src = `http://127.0.0.1:5000/uploads/${data.image}?t=${Date.now()}`;

        preview.style.display = "block";

        alert("Image uploaded successfully");

    } catch (error) {

        console.log(error);

    }
});