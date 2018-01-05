import styled from 'styled-components'


export const Button = styled.button`
    display: inline-block;
    color: #fff;
    background: #745b8c;
    border: none;
    border-radius: 5px;
    min-height: 30px;
    vertical-align: middle;
    margin: 0 8px 0 0;
    padding: 4px 12px;
    cursor: pointer;
    outline: none;
    user-select: none;
    &:hover {
        background: #ba95de;
    }
    &.right {
        float: right;
    }
`

export const Layout = styled.div`
`

export const Content = styled.div`
    margin-left: 250px;
    width: 800px;
    padding: 20px 40px;
    color: #231c27;
    background: #fdfbff;
    & a {
        color: #231c27;
        text-decoration: underline;
        &:hover {
            color: #64556d;
        }
    }
`
export const Sidebar = styled.div`
    background: #352d3c;
    overflow: auto;
    position: fixed;
    height: 100vh;
    left: 0px;
    top: 0px;
    bottom: 0px;
    width: 250px;
    display: block;
    user-select: none;

    & ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        margin-top: 8px;
        & li {
            a {
                display: block;
                padding: 6px 12px;
                &:hover {
                    background: #5a4f63;
                }
                &.active {
                    display: block;
                    background: #4b4252;
                }
            }
            > ul {
                margin-left: 10px;
                margin-right: 10px;
                margin-top: 0;
                .active {
                    background: transparent;
                    font-weight: bold;
                }
            }
        }
    }
`
export const SideTitle = styled.div`
    background: #0099ff;
    color: #fff;
    text-align: center;
    font-weight: bold;
    padding: 10px;
    font-family: Arvo;
    font-size: 15px;

    & > div {
        font-family: Lato;
        text-transform: uppercase;
        margin-top:10px;
    }

    & img {
        width: 50px;
        height: 50px;
        margin-top: 20px;
        display: block;
        margin: 10px auto 0 auto;
    }
`

