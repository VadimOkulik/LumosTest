import { FourthSectionStyled, NameInput, Button } from "./styled"
import {useEffect, useState} from "react";
import Modal from "@/components/modal";

export const FourthSection = () => {
    const [names, setNames] = useState([]);
    const [selectedName, setSelectedName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchNames = async () => {
            const response = await fetch('https://randomuser.me/api/?results=3');
            const data = await response.json();
            const namesList = data.results.map(user => `${user.name.first} ${user.name.last}`);
            setNames(namesList);
        };
        fetchNames();
    }, []);

    const handleNameSelect = (name) => {
        setSelectedName(name);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };



    return (
        <FourthSectionStyled id="getVpnId">
            <h2>Choose <span>your name</span></h2>
            {names.map((name, index) => (
                <NameInput key={index} selected={selectedName === name}>
                    <input
                        type="radio"
                        name="name"
                        value={name}
                        onChange={() => handleNameSelect(name)}
                        checked={selectedName === name}
                    />
                    {name}
                </NameInput>
            ))}
            <Button onClick={handleOpenModal}>Get VPN</Button>
            {isModalOpen && (
                <Modal name={selectedName} onClose={handleCloseModal} />
            )}

        </FourthSectionStyled>
    )
}
