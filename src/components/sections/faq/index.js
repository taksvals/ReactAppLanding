import './style.css';
import Text from '../../reusable/text';
import FaqItem from '../../reusable/faq-item';


function FAQ() {

    const accordionData = [
        {
            heading: "How to contact with riders emergency?",
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Earum reiciendis adipisci impedit accusamus. Doloremque recusandae facere unde! 
            Quam necessitatibus in, sint assumenda voluptates iusto 
            aut ea eius quos consectetur quo vero beatae ex distinctio! Ab.` 
        },

        {
            heading: "App installation failed, how to update system information?",
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Earum reiciendis adipisci impedit accusamus. Doloremque recusandae facere unde! 
            Quam necessitatibus in, sint assumenda voluptates iusto 
            aut ea eius quos consectetur quo vero beatae ex distinctio! Ab.` 
        },

        {
            heading: "Website response taking time, how to improve?",
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Earum reiciendis adipisci impedit accusamus. Doloremque recusandae facere unde! 
            Quam necessitatibus in, sint assumenda voluptates iusto 
            aut ea eius quos consectetur quo vero beatae ex distinctio! Ab.` 
        },

        {
            heading: "New update fixed all bug and issue",
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Earum reiciendis adipisci impedit accusamus. Doloremque recusandae facere unde! 
            Quam necessitatibus in, sint assumenda voluptates iusto 
            aut ea eius quos consectetur quo vero beatae ex distinctio! Ab.` 
        }
    ]

  return (
    <div id="faq">
    <section className="faq-section">
        <div className="container">
            <div className="faq-header">
                <Text   
                    headingSize="large"  
                    heading="Frequently asked questions" 
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Laudantium temporibus laboriosam dolore eius id nostrum quisquam dicta 
                    iure asperiores? Est?" 
                    align="center"
                />
            </div>

            <div>
                <div className="accordion">
                    {accordionData.map(({ heading, text }) => (
                    <FaqItem heading={heading} text={text} />
                    ))}
                </div>

            </div>
        </div>
    </section>
</div>
  );
  
}

export default FAQ;
