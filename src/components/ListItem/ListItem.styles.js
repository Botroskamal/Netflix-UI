import styled from "styled-components";


export const ListItemContainer = styled.div`
    width: 225px;
    height: 120px;
    background-color: var(--main-color);
    margin-right: 5px;
    overflow: hidden;
    cursor: pointer;
    color: white;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .itemCard {
        display: none;
    }

    &:hover {
        .itemCard {
            display: contents;
        }
        width: 325px;
        height: 300px;
        position: absolute;
        left: ${props => props.index * 225 - 50 + props.index * 2.5}px;
        top: -150px;
        -webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
        box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
        border-radius: 5px;

        img {
            height: 140px;
        }

        .itemCard {
            display: flex;
            flex-direction: column;
            video {
                width: 100%;
                height: 140px;
                object-fit: cover;
                position: absolute;
                top: 0;
                left: 0;
            }

            .itemInfo {
                display: flex;
                flex-direction: column;
                padding: 5px;

                .itemIcons {
                    display: flex;
                    margin-bottom: 10px;

                    .icon {
                        border: 2px solid white;
                        padding: 5px;
                        border-radius: 50%;
                        margin-right: 10px;
                        font-size: 16px;
                    }
                }

                .itemInfoTop {
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                    font-size: 14px;
                    font-weight: 600;
                    color: gray;

                    .limit {
                        border: 1px solid gray;
                        padding: 1px 3px;
                        margin: 0 10px;
                    }
                }

                .desc {
                    font-size: 13px;
                    margin-bottom: 10px;
                }

                .genre {
                    font-size: 14px;
                    color: lightgray;
                }
            }
        }
    }
`