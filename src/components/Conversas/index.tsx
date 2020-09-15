import React from 'react';

import './styles.scss';

import { FiCamera } from 'react-icons/fi';

const Conversa: React.FC = () => {
  return (
    <>
      <div className="chats">
        <div className="pick">
          <FiCamera size={20} color="#b8b8b8" />
        </div>
        <div className="read">
          <p>João</p>
          <span>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type.
          </span>
        </div>
        <div className="complements">
          <span>14:01</span>
          <div className="notification">2</div>
        </div>
      </div>
      <div className="chats">
        <div className="pick">
          <FiCamera size={20} color="#b8b8b8" />
        </div>
        <div className="read">
          <p>José</p>
          <span>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type.
          </span>
        </div>
        <div className="complements">
          <span>13:46</span>
          <div className="notification">1</div>
        </div>
      </div>
      <div className="chats">
        <div className="pick">
          <FiCamera size={20} color="#b8b8b8" />
        </div>
        <div className="read">
          <p>Raul</p>
          <span>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type.
          </span>
        </div>
        <div className="complements">
          <span>10:35</span>
        </div>
      </div>
      <div className="chats">
        <div className="pick">
          <FiCamera size={20} color="#b8b8b8" />
        </div>
        <div className="read">
          <p>Camila</p>
          <span>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type.
          </span>
        </div>
        <div className="complements">
          <span>Ontem</span>
        </div>
      </div>
      <div className="chats">
        <div className="pick">
          <FiCamera size={20} color="#b8b8b8" />
        </div>
        <div className="read">
          <p>Cauê</p>
          <span>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type.
          </span>
        </div>
        <div className="complements">
          <span>32 Julho</span>
        </div>
      </div>
    </>
  );
};

export default Conversa;
