import React from 'react';
import '../parametre.css';
import Sidbar from '../sidbar/sidbar.component';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';









export default function Parametre() {
  return (
    <div>
    <Sidbar />
    <div className='framej-8'></div>
    <div className='overlapj-groupj'>
    <h1 className='textdd-2 '>informations personnelles</h1>
    <div className='framepp-67'></div>
    <label className='prenompp'>Prenom</label>
    <input className='inputppprenom' type='text' placeholder='Mohammed' />
    <label className='nompps'>Nom</label>
    <input className='inputppnoms' type='text' placeholder='Berrada' />
    <label className='emailppss'>Email</label>
    <input className='inputppemailss' type='text' placeholder='nom@domaine.com' />
    <button className='editppss'>MODIFIER</button>
    <div className='frameppss-68'></div>
    <div className='ellpssp'>
    <img className="iconss-medium-chevron-2" src="https://anima-uploads.s3.amazonaws.com/projects/64666945e6315846915e9594/releases/6468bd0be1eaf98936550206/img/avatar@2x.png"/>
    </div>
    <label className='labedpcs'>Modifier votre photo</label>
    <button className='delinps'>supprimer</button>
    <label className='clitelc'>cliquez pour télécharger</label>
    <div id="outside">
    <div id="inside">
  </div>
 </div>
 <button type="file"  className='filees'> + </button>
           
            {/* <input type="file" onChange={handleChange} />
            <img src={file} /> */}
            <label className="uplimg">Upload</label>
    </div>
    </div>
  );
}