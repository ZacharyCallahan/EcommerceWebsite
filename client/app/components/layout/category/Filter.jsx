"use client";
import { useState } from "react";
import Button from "../../ui/Button";
import Header from "../../ui/Header";
import FilterItem from "./FilterItem";
import Icon from "../../ui/Icon";
import { CSSTransition } from "react-transition-group";
import { Hidden } from "@mui/material";
import List from "../../ui/lists/List";
import ListItem from "../../ui/lists/ListItem";
import LoginLogout from "../../ui/LoginLogout";

const Filter = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className=" py-5 w-5/6 m-auto transition-all ">
                <div className="space-y-5">
                    <CSSTransition
                        in={open === true}
                        timeout={300}
                        classNames="width">
                        <div className={`${open ? "w-full" : "w-fit"} `}>
                            <FilterItem
                                className={` flex items-center justify-between`}>
                                <Button onClick={() => setOpen(!open)}>
                                    <Header>Filter</Header>
                                </Button>
                                <CSSTransition
                                    in={open === true}
                                    timeout={300}
                                    classNames="reset"
                                    unmountOnExit>
                                    <Button
                                        className={
                                            "shadow-md px-2 bg-groovy-red rounded-md w-fit text-white ml-auto"
                                        }>
                                        Reset
                                    </Button>
                                </CSSTransition>
                            </FilterItem>
                        </div>
                    </CSSTransition>
                    <CSSTransition
                        in={open === true}
                        timeout={300}
                        classNames="filter"
                        unmountOnExit>
                        <FilterItem>
                            <Header>Pricing Range</Header>
                            <div className="flex gap-5">
                                <input
                                    className="border-2 border-opacity-20 rounded-md p-2 w-1/2"
                                    placeholder="Min"
                                    type="range"
                                />
                            </div>
                        </FilterItem>
                    </CSSTransition>
                </div>
            </div>
        </div>
    );
};

export default Filter;
