import React, { useState } from 'react';
import Navbar from '../../NavBar/NavBar';
import { useAuth } from '../../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSync, faFileExport, faColumns } from '@fortawesome/free-solid-svg-icons';
import './assets.scss';
import Footer from '../../Footer/Footer';

const Assets = () => {
  const { currentUser } = useAuth(); 
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const assets = [];
  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      
      <div className="assets-page">
        <h2>Assets assigned to {currentUser ? currentUser.name : 'Altin...'}</h2>
        <div className="toolbar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="icon-buttons">
            <button>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button>
              <FontAwesomeIcon icon={faSync} />
            </button>
            <button>
              <FontAwesomeIcon icon={faFileExport} />
            </button>
            <button>
              <FontAwesomeIcon icon={faColumns} />
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Category</th>
              <th>Asset Tag</th>
              <th>Name</th>
              <th>Model</th>
              <th>Serial</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.length === 0 ? (
              <tr>
                <td colSpan="7">No matching records found</td>
              </tr>
            ) : (
              filteredAssets.map((asset, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td><img src={asset.image} alt={asset.name} /></td>
                  <td>{asset.category}</td>
                  <td>{asset.assetTag}</td>
                  <td>{asset.name}</td>
                  <td>{asset.model}</td>
                  <td>{asset.serial}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        
      </div>
      <Footer />
    </>
  );
};

export default Assets;
