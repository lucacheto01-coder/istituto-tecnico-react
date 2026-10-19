export const Form = () => {
    return (
        <section className="iscriviti" id="iscrivitix">
                <h3>ISCRIVITI O ACCEDI AD UNO DEI NOSTRI CORSI</h3>
                <form action="pagina-ricevente.php" method="post">
                    <fieldset>
                        <legend>Iscriviti</legend>
                            <table>
                                <tbody>
                                  <tr><td><label htmlFor="nome">Nome</label></td> <td><input type="text" id="nome" placeholder="inserisci il nome" name="campoNome" required/></td></tr>

                                  <tr><td><label htmlFor="cognome">Cognome</label></td> <td><input type="text" id="cognome" placeholder="inserisci il cognome" name="campoCognome" required/></td></tr>

                                  <tr><td><label htmlFor="email">Email</label></td> <td><input type="email" id="email" placeholder="inserisci l'email" name="campoEmail" required/></td></tr>

                                  <tr><td><label htmlFor="password">Password</label></td> <td><input type="password" id="password" placeholder="inserisci password" name="campoPassword" pattern="[A-Z]{8}[0-9]{2}"/></td></tr>

                                  <tr><td><label htmlFor="cellulare">Numero di telefono</label></td> <td><input type="tel" id="cellulare" placeholder="inserisci numero telefono" name="campoTelefono"/></td></tr>

                                  <tr><td><label htmlFor="paese">Paese</label></td> <td><select name="campoPaese" id="paese"> <option value="it">Italia</option> <option value="fr">Francia</option> <option value="Deu">Germania</option></select></td></tr>
                                </tbody>                                  
                            </table>      
                    </fieldset>
                    <button type="submit">Iscriviti</button>
                </form>
            </section>
    );
};