class getVoucher
{

    static checkVoucher(email_value)
    {
        if(email_value !== "" && email_value !== null)
        {
            const value = "Terima kasih atas partisipasi anda untuk mengisi email di bawah ini, Mohon ditunggu 4-5 hari kedepan";
            return Promise.resolve(value);
            
        }
        else
        {
            const value = "Gagal Masuk";
            return Promise.reject(value);
        }
    }
}

export default getVoucher;