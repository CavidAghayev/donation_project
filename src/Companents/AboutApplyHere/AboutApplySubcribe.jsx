import React from 'react'
function AboutApplySubcribe() {
  return (
    <section>
        <div className='about-apply-subcribe'>
            <div className="about-apply-subcribe-items">
                <div className="about-apply-subcribe-items-title">
                    <h1>Həyat Fondunun yeni qeyri-kommersiya <br /> qarşılama təcrübəsi haqqında məlumatlı olun</h1>
                </div>
                <div className="about-apply-subcribe-items-text">
                    <p>Həyat Fondu icmasına qoşulmağa marağınızı yüksək qiymətləndiririk! 2022-ci ilin fevral ayında biz qeyri-kommersiya təşkilatı liderlərindən ibarət inanılmaz icmamızla birlikdə qeyri-kommersiya təşkilatının qarşılanma təcrübəsini daha əhatəli və fandreyzinq bacarıqlarını təkmilləşdirməyə ümid edən hər kəs üçün əlçatan olması üçün yenidən dizayn etdik. Əgər siz Həyat Fondu-nun daha ədalətli platformaya çevrilmə yolu haqqında daha çox öyrənmək istəyirsinizsə, burada “İcma tərəfindən idarə olunan dəyişikliyi sürətləndirmək haqqında öyrəndiklərimiz” məqaləmiz var.</p>
                <p>Biz 2022-ci ilin iyun ayında yenidən işlənmiş yeni proqram olan Həyat Fonduna Pathway-i sınaqdan keçirdik! Təcrübəyə canlı Zoom seminarları, seçilmiş təlim məzmunu ilə məşğul olmaq, həmyaşıdlarınızla şəbəkə qurmaq və Fandreyzinq üçün Hazır İş Kitabınızı tamamlamaq daxildir. Öyrənmə təcrübəsini başa vurduqdan sonra, qeydiyyatdan keçmiş qeyri-kommersiya təşkilatını təmsil edirsinizsə, Həyat Fondunda maliyyə vəsaiti toplamaq seçiminiz olacaq və biz lazımi araşdırma ərizənizi təsdiq edirik. Budur, ərizə sənədlərinə ümumi baxış. Əgər siz hazırda qeyri-kommersiya təşkilatı kimi qeydiyyatdan keçmiş bir təşkilatı təmsil etmirsinizsə, Qeyri-kommersiya təşkilatının qeydiyyatının ABC-lərinə baxın.</p>
               <h3>Həyat Fondu proqramında iştirak etmək üçün növbəti fürsət 2023-cü ilin əvvəlidir. Səbriniz üçün əvvəlcədən təşəkkür edirik!</h3>
                </div>
                <div className="about-apply-subcribe-items-inputs">
                    <form action="">
                    <label htmlFor="email">E-poçt ünvanı *</label>
                    <input type="email" name="" id="email" /><br />
                    <label htmlFor="name">Ad *</label>
                   <input type="text" name="" id="name" /><br />
                   <label htmlFor="surname">Soyad *</label>
                    <input type="text" name="" id="surname" /><br />
                    <label htmlFor="organization-name">Təşkilatın Adı *</label>
                   <input type="text" name="" id="organization-name" /><br />
                   <label htmlFor="">Ünvan *</label>
                <input type="text" name="" id="" placeholder='Küçə ünvanı'/> <br />
                    <input type="text" name="" id="" placeholder='Ünvan xətti 2'/>
                    <input type="text" name="" id=""    placeholder='Ölkə'/>
                    <input type="text" name="" id=""  placeholder='Şəhər'/>
                    <input type="text" name="" id=""      placeholder='Poçt kodu'/>
                    </form>
                </div>
                  <div className='btn'>Abunə olun</div>
            </div>
        </div>
    </section>
  )
}

export default AboutApplySubcribe