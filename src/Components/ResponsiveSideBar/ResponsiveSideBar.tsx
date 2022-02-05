import { FC, useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faBullhorn,
    faEllipsisH,
    faFile,
    faFolderOpen,
    faRss,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import Style from './ResponsiveSideBar.module.scss';
export const ResponsiveSideBar: FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const collapsedStyle =
        `shadow text-indigo ${Style.base} ` +
        (collapsed ? `${Style.collapse}` : `${Style.expand}`);
    const collapseToggle = collapsed ? (
        <FA
            className='fa-lg fa-fw'
            icon={faEllipsisH}
            onClick={() => {
                setCollapsed(false);
            }}
        />
    ) : (
        <>
            <Button
                className='rounded-pill'
                variant='indigo'
                style={{ fontSize: '12px' }}
                onClick={() => {
                    setCollapsed(true);
                }}
            >
                Hide Text
            </Button>
        </>
    );
    return (
        <Nav
            as='ul'
            className={collapsedStyle}
            onSelect={e => {
                console.log(e);
            }}
        >
            <Nav.Item
                as='li'
                className={`${Style.active}`}
            >
                <Nav.Link>
                    <FA className='fa-lg fa-fw' icon={faUsers} />
                    <span>Item 1</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item
                as='li'
                className={`${Style.notSelected}`}
            >
                <Nav.Link>
                    <FA className='fa-lg fa-fw' icon={faRss} />
                    <span>Item 2</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item
                as='li'
                className={`${Style.notSelected}`}
            >
                <Nav.Link>
                    <FA className='fa-lg fa-fw' icon={faBell} />
                    <span>Item 3</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item
                as='li'
                className={`${Style.notSelected}`}
            >
                <Nav.Link>
                    <FA className='fa-lg fa-fw' icon={faFile} />
                    <span>Item 4</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item
                as='li'
                className={`${Style.notSelected}`}
            >
                <Nav.Link>
                    <FA className='fa-lg fa-fw' icon={faBullhorn} />
                    <span>Item 5</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item
                as='li'
                className={`${Style.notSelected}`}
            >
                <Nav.Link>
                    <FA className='fa-lg fa-fw' icon={faFolderOpen} />
                    <span>Item 6</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item
                as='li'
                className='bg-light d-flex justify-content-evenly align-items-center'
            >
                {collapseToggle}
            </Nav.Item>
        </Nav>
    );
};
