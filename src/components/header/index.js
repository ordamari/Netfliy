import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
    Background, Container, Logo, BottonLink, Feature, Text, FeatureCallOut, Link, Group, Picture, Profile, Dropdown,
    Search, SearchIcon, SearchInput,PlayButton
} from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`${process.env.PUBLIC_URL}/images/users/${src}.png`} />
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);
    return <Search {...restProps}  >
        <SearchIcon onClick={() => { setSearchActive(searchActive => !searchActive) }} >
            <img src={`${process.env.PUBLIC_URL}/images/icons/search.png`} alt="Search" />\
        </SearchIcon>
        <SearchInput value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} placeholder="Search films and series" active={searchActive} />
    </Search>
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.BottonLink = function HeaderBottonLink({ children, ...restProps }) {
    return <BottonLink {...restProps}>{children}</BottonLink>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to} >
            <Logo {...restProps} />
        </ReactRouterLink>

    )
}