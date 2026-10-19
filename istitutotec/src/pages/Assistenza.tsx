function Assistenza() {
    return (
        <form action="pagina_ricevente.php" method="post">        

                   <label htmlFor="messaggio">Messaggio:</label>
                   <textarea id="messaggio" name="campoMessaggio"></textarea>

                   <label htmlFor="paese">Paese:</label>
                   <select id="paese" name="campoPaese">
                     <option value="it">Italia</option>
                     <option value="fr">Francia</option>
                   </select>

                   <button type="submit">Invia</button>
                </form>
    );
}

export default Assistenza;