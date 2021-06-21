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
    <section class="faq-section">
        <div class="container">
            <div class="faq-header py-2">
                <Text   
                    headingSize={36}   
                    heading="Frequently asked questions" 
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Laudantium temporibus laboriosam dolore eius id nostrum quisquam dicta 
                    iure asperiores? Est?" 
                    align="center"
                />
            </div>

            <div class="py-2">
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
