import React from 'react';
import styled from 'styled-components';
import warning from '../../../images/warning.png';
import x from '../../../images/x.png';

const Background = styled.div`
	background-color: rgba(0, 0, 0, 0.4);
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
	overflow: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalWrapper = styled.div`
	width: 432px;
	height: 220px;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: #000;
	display: grid;
	position: relative;
	z-index: 10;
	border-radius: 10px;
`;

const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.8;
	color: #141414;
`;

const ModalTextDiv = styled.div`
	height: 64px;
	padding-bottom: 8px;
	border-bottom: 1px solid #b0b8bc;
	border-radius: 2px;
	color: #222f65;
	background-color: #fff;
	margin: 0 auto;
	font-family: 'Inconsolata', monospace;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

const Icon = styled.img`
	height: 20px;
	width: 20px;
	padding: 8px;
`;

const HeaderSix = styled.h6`
	font-size: 2rem;
	color: #505f98;
`;

const ButtonDiv = styled.div`
	padding: ${(props) => props.padding || '24px'};
	margin: 0 auto;
	display: inline-flex;

	& a {
		margin: 0;
	}
`;

const Button = styled.button`
	width: 128px;
	height: 48px;
	font-family: 'Inconsolata', monospace;
	font-size: ${(props) => props.size || '1rem'};
	border-radius: 2px;
	margin: ${(props) => props.margin || '0 16px 16px'};
	border: 1px solid #111b47;
	font-decoration: none;

	&.primary {
		background-color: #111b47;
		color: #fff;
	}

	&.secondary {
		background-color: #e5e7f0;
		color: #222f65;
	}
`;

const Modal = ({ modal, setModal, handleSubmit }) => {
	return (
		<>
			{modal ? (
				<Background>
					<ModalWrapper setmodal={setModal}>
						<ModalContent>
							<ModalTextDiv>
								<Icon src={warning} alt='question mark'></Icon>
								<HeaderSix>Ready to publish?</HeaderSix>
							</ModalTextDiv>
							<ButtonDiv>
								<Button
									className='secondary'
									onClick={() => setModal((prev) => !prev)}>
									Cancel
								</Button>
								<Button
									onClick={handleSubmit}
									className='primary'
									type='submit'>
									Publish
								</Button>
							</ButtonDiv>
						</ModalContent>
					</ModalWrapper>
				</Background>
			) : null}
		</>
	);
};

export default Modal;
