import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { DropdownProps, MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import "./SortByPrice.css";

const SortByPrice: React.FC<{ setSortOrder: (order: string) => void}> = ({ setSortOrder }) => {
    const [open, setOpen] = useState(false);
    const [sortOption, setSortOption] = useState("Sortera på: ");

    const handleMenuClick: MenuProps["onClick"] = (e) => {
        if (e.key === "1") {
            setSortOrder("ascending");
            setSortOption("Sorterat på: Stigande pris"); 
        } else if (e.key === "2") {
            setSortOrder("descending");
            setSortOption("Sorterat på: Fallande pris"); 
        }
        setOpen(false);
    }

    const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
        if (info.source === "trigger" || nextOpen) {
            setOpen(nextOpen);
        }
    }

    const items: MenuProps["items"] = [
        {
            label: "Stigande pris",
            key: "1",
        },
        {
            label: "Fallande pris",
            key: "2",
        },
    ];

    return (
        <Dropdown
        menu={{
            items,
            onClick: handleMenuClick,
        }}
        onOpenChange={handleOpenChange}
        open={open}
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    {sortOption}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
}

export default SortByPrice