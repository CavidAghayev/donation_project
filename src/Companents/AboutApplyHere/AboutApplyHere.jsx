import React from "react";
import { useNavigate } from "react-router-dom";
function AboutApplyHere() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="about-apply-page"></div>
      <div className="about-apply-page__content">
        <p>
          Həyat Fondu icmasına qoşulmağa marağınızı yüksək qiymətləndiririk! Biz
          hazırda qeyri-kommersiya <br /> təşkilatı liderlərindən ibarət
          inanılmaz icmamızla işləyirik ki, qeyri-kommersiya təşkilatının
          qarşılanma <br /> təcrübəsini daha əhatəli və fandreyzinq
          bacarıqlarını təkmilləşdirməyə ümid edən hər kəs üçün əlçatan <br />{" "}
          olsun. Əgər siz Həyat Fondunun daha ədalətli platformaya çevrilmə yolu
          haqqında daha çox öyrənmək <br /> istəyirsinizsə, burada “İcma
          tərəfindən idarə olunan dəyişiklikləri sürətləndirmək haqqında <br />{" "}
          öyrəndiklərimiz” məqaləmiz var.
        </p>
        <p>
          Yeni proqrama dörd əsas təcrübə ətrafında cəmlənmiş rəhbər öyrənmə
          təcrübəsi daxil olacaq: hekayənizi <br /> izah etmək, şəbəkənizi
          genişləndirmək, strategiyanızı planlaşdırmaq və münasibətlərinizi
          inkişaf etdirmək.
        </p>
        <p>
          Hər kəs bizimlə öyrənməyə və fandreyzinq etməyə hazır ola bilər!
          Öyrənmə təcrübəsini başa vurduqdan <br /> sonra, qeydiyyatdan keçmiş
          qeyri-kommersiya təşkilatını təmsil edirsinizsə, Həyat Fondunda
          maliyyə <br /> vəsaiti toplamaq seçiminiz olacaq və biz lazımi
          araşdırma ərizənizi təsdiq edirik. Budur, ərizə sənədlərinə <br />{" "}
          ümumi baxış. Əgər siz hazırda qeyri-kommersiya təşkilatı kimi
          qeydiyyatdan keçmiş bir təşkilatı təmsil <br /> etmirsinizsə,
          Qeyri-kommersiya təşkilatının qeydiyyatının ABC-lərinə baxın.
        </p>
        <p>
          Ümid edirik ki, 2022-ci ilin iyun/iyul aylarında yeni icma üzvlərini
          qarşılamağa başlayacağıq və bu vaxt <br /> ərzində e-poçt yeniləmələri
          almaq üçün sizi abunə olmağa dəvət edirik. Səbirli olduğunuz üçün
          təşəkkür <br /> edirik və tezliklə sizinlə əlaqə saxlamağı
          səbirsizlənirik!
        </p>
        <div className="btn" onClick={() => navigate("/aboutapplysubcribe")}>
          Abunə olun
        </div>
      </div>
    </section>
  );
}

export default AboutApplyHere;
