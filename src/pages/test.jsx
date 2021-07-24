/* show url of video use form ant desgin */

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

async function handleChange(e) {
  const file = await getBase64(e.file.originFileObj);
  console.log(file);
}

/*  */
