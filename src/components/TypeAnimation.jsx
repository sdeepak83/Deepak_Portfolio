import { TypeAnimation } from 'react-type-animation';
export const ExampleComponent = () => {
    return (
        <TypeAnimation
            sequence={[

                'Frontend Developer',
                1500,
                'Coder',
                1500,
                'React Developer',
                1500,
                'Mern Stack Developer',
                1500
            ]}
            wrapper="span"
            speed={200}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};