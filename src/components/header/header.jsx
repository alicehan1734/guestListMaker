import React from 'react';
import styles from './header.module.css'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Header = ({onLogout}) => {

  const exportPDF = () => {

       html2canvas(document.querySelector("#capture"), {
         allowTaint: true,
         useCORS: true,
         logging: false,
         height: window.outerHeight + window.innerHeight,
         windowHeight: window.outerHeight + window.innerHeight
       }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');

        var imgWidth = 210;
        var pageHeight = imgWidth * 1.414;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        var doc = new jsPDF('p', 'mm');
        var position = 0;

        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 20) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        doc.save("download.pdf"); 
        // document.body.appendChild(canvas);  // if you want see your screenshot in body.
        
        // const pdf = new jsPDF();
        // pdf.addImage(imgData, 'PNG', 0, 0);
        // pdf.save("download.pdf"); 
    });
  }

  return (
    <header className={styles.header}>

      {onLogout && <div className={styles.divLog}>
      <button className={styles.logout} onClick={exportPDF}>exportPDF🤩</button>
      <button className={styles.logout} onClick={onLogout}>Logout🧤</button>
      </div>}
      
      <img className={styles.logo} src="./images/invitaion.png" alt="logo"/>
      <h5 className={styles.title} >Gganbu, Let's make a list of people you want to invite to your game. 👽</h5>
    </header>
  );
};

export default Header;