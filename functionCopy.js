export default function copy(tag) {

    try {
        navigator.clipboard.writeText(tag.value);
        console.log("Texto copiado com sucesso!");
    } catch (err) {
        console.error("Falha ao copiar texto:", err);
    }
}