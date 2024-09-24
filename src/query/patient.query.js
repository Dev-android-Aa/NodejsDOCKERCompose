const QUERY = {
    SELECT_PATIENTS: 'SELECT * FROM patients ORDER BY created_at DESC LIMIT 100',
    SELECT_PATIENT:  'SELECT * FROM patients WHERE id = ?',
    CREATE_PATIENTS: 'INSERT INTO patients(first_name, last_name, email, phone, addresse, dignostic, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
    UPDATE_PATIENTS: 'UPDATE patients SET first_name = ?, last_name = ?, email = ?, addresse = ?, dignostic = ?, phone = ?, image_url = ?  WHERE id = ?',
    DELETE_PATIENTS: 'DELETE FROM patients WHERE id = ?',
    CREATE_PATIENTS_PROCEDURE: 'CALL create_and_return(?, ?, ?, ?, ?, ?, ?)'
};
export default QUERY;