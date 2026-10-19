export const Footer = () => {
    return (
        <footer>

            <aside>
            <section className="Chi siamo" id="chisiamox">
                <h2>CHI SIAMO</h2>
                <p>Istituto TEC è un Ente Accreditato dal Ministero dell’Istruzione e del Merito (Decreto MIM n. 2941 del 3 dicembre 2024).
                   L’accreditamento certifica che l’ente rispetta i requisiti previsti dalla normativa nazionale in materia di formazione e istruzione, garantendo l’erogazione di percorsi formativi di qualità, aggiornati e conformi agli standard ministeriali. L’accreditamento del MIM è garanzia di serietà, affidabilità e valore del percorso scelto.</p>
            </section>
            </aside>

            <section className="contattaci">
                <h2>CONTATTACI</h2>
                <h3>Contattaci per ulteriori informazioni</h3>
                <p><a href="mailto:abc@def.it">contattaci 1</a></p>
                <p>o chiama:<strong>0818761543</strong> oppure: <strong>3465621823</strong></p>
                <address>
                    Istituto TEC, Via Roma 123, 00100 Roma, Italia.
                </address>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12074.611046698703!2d14.238272684801347!3d40.835590170670976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b085255ec54b9%3A0x8ad9122a45803c14!2sPiazza%20del%20Plebiscito!5e0!3m2!1sit!2sit!4v1771016708741!5m2!1sit!2sit" width="600" height="450" style={{ border: 0 }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                
                <div className="seganlibro" id="assistenzax"></div>

                <h2>CHIEDI AIUTO AL NOSTRO ASSISTENTE AI</h2>
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
            </section>
            
           </footer>
    );
};