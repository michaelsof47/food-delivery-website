class getVoucher
{
    static checkVoucher(email_value)
    {
        let message_alert = (message = "Data Tidak Berhasil") =>
        {
            alert(message);
        }

        let email_full = `${email_value}@gmail.com`;

        if(email_full !== "" && email_full !== null)
        {
            message_alert = "Terima kasih atas partisipasi anda untuk mengisi email di bawah ini, Mohon ditunggu 4-5 hari kedepan";
            return Promise.resolve(message_alert);
            
        }
        else
        {
            message_alert = "Gagal Masuk";
            return Promise.reject(message_alert);
        }
        
    }
}

export default getVoucher;