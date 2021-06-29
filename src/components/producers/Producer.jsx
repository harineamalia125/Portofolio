import "./producer.scss"

export default function Producer() {
    const data = [
        {
            id: 1,
            name: "Shueisha",
            title: "Penerbit majalah Shounen",
            desc: "Shueisha Inc. (株式会社集英社 Kabushiki Kaisha Shūeisha) adalah sebuah perusahaan penerbitan Jepang yang berpusat di Tokyo",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Shuueisha01%28tokyo%29.JPG/180px-Shuueisha01%28tokyo%29.JPG"
        },
        {
            id: 2,
            name: "Oda Eichiro",
            title: "Pengarang Komik One Piece",
            desc: "Eiichiro Oda (尾田栄一郎 Oda Ei'ichirō ) adalah seorang mangaka kelahiran 1 Januari 1975 di prefektur Kumamoto.Saat Eiichiro Oda kecil, Eiichiro Oda selalu berangan-angan sebagai bajak laut dan ingin menjadi mangaka. Pada umur 17 tahun, Eiichiro Oda mengirimkan karyanya berjudul Wanted dan memenangkan berbagai penghargaan.",
            img: "https://cdn.idntimes.com/content-images/duniaku/post/20210101/eiji-aonuma-one-piece-5b3584e420feb05a592bc5152e3e36be_600x400.jpg",
            featured: true,
        },
        {
            id: 3,
            name:"Toei Animation",
            title: "Studio Animasi",
            desc: "Toei Animation (東映アニメーション Tōei Animēshon) adalah nama sebuah studio animasi Jepang yang dimiliki oleh perusahaan Toei Company.",
            img: "http://www.onepiecepodcast.com/wp-content/uploads/2015/08/Screen-Shot-2015-08-07-at-12.42.34-AM-1.jpg"
        },
       
    ];
    return (
        <div className="producer" id="producer"> 
            <h1>The Producers</h1>  
            <div className="container">
                {data.map(d=>(
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src={d.img} alt=""/>
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div> 
                 ))}  
            </div>   
        </div>
    )
}
