<template>
    <el-card shadow="always" class="box-card">
          <div class="text item">
            <h1>YOUR TEAM</h1>
          </div>

          <section class="team">
            
            <section class="team-card">
            <el-image
              style="width: 80%;"
              :src="tomUrl"></el-image>

              <h1>Thomas Weartz</h1>
              <h2>President &amp; Founder</h2>
              <p>(317)885-9105</p>
            </section>

              <section class="teamDescription">
              <p>
                Thomas Weartz, President and Founder of Sterling Insurance, Inc., has more than 25 years of experience in the health insurance industry. He has expert knowledge of both, the fully insured and self-insured, sides of the market place. During the last 25 years, Thomas has shown progressively responsible experience, servicing as many as 10,000 employees collectively in companies that range from small group to large group.
              </p>

              <p>
              Thomas has led these companies through start-up, survival, turnaround and growth modes. Thomas has vast experience with a multitude of industries, including professional services, retail, non-profit, FQHC’s, medical groups, restaurant, light industry, cities, towns and large municipalities. His understanding and ability to custom match employers with the appropriate benefit plan design is unsurpassed. Thomas works for both the employer and the employee. It should be noted that Thomas is an independent agent and works with a multitude of national insurance carriers.
              </p>

              <p>
              Thomas is an active member of his local community. He has served as Board Chair for Windrose Health Network (an FQHC facility) and past President of the Economic Development Committee for the City of Greenwood. He has served the youth of his community by volunteering his time to the local Little League. He is a member of the Indianapolis Association of Health Underwriters and a Freemason and an active member of the Murat Shrine Association.
              </p>

              <p>
              Thomas Weartz is a graduate from the University of Cincinnati, he holds active Health and Life Insurance Licenses in the states of Indiana, Ohio, Kentucky, Kansas, Illinois, and North Carolina. Thomas is a member of the Society for Human Resource Management (SHRM).
              </p>
              </section>
          </section>

          <el-divider></el-divider>

          <section class="team">
            <section class="team-card">
            <el-image
              style="width: 80%;"
              :src="samUrl"></el-image>

              <h1>Samantha Avers</h1>
              <h2>Business Development</h2>
            </section>

            <section class="teamDescription">
              <p>
                Samantha Avers, Director of Business Development, brings over 12 years of consulting experience in a variety of services including document management, subscription software, litigation support technology, payroll &amp; &amp; HR support, and benefits compliance &amp; technology.
              </p>

              <p>
                She has overseen the implementation of multimillion dollar services on a national scale, and has worked with Fortune 500 companies, AMLAW 10 Law Firms, as well as mid-sized businesses, and single employee businesses.
              </p>

              <p>
                As a former business owner herself, she believes that employees are a company’s #1 asset. She understands the importance of attracting, hiring, and retaining key players. She consults with and advises our clients throughout the entire employee lifecycle from identifying and hiring, to onboarding, payroll, benefits selection, retirees and terminations.
              </p>

              <p>
                Samantha graduated from Presbyterian College, in Clinton South Carolina, with a Bachelor’s degree in both Biology &amp; Psychology. She was a division II college athlete and an all-conference MVP. She is a recent transplant from Columbus, Ohio and lives on the north side of Indianapolis with her dog Meathead.
              </p>
            </section>
          </section>

          <el-divider></el-divider>

          <section class="team">
              <section class="team-card">
             <el-image
              style="width: 80%;"
              :src="lisaUrl"></el-image>

              <h1>Lisa Weartz</h1>
              <h2>SHRM-CP</h2>
              <h2>Certified HR Professional</h2>
              </section>

            <section class="teamDescription">
                <p>
                    As a former educator Lisa brings a wealth of leadership and organizational skills to the team. She holds a
                    B.A. in education from Northern Kentucky University and is a licensed Health and Life Insurance agent in
                    Indiana and Ohio. Proficient in payroll processing, Lisa has experience in several recognized Payroll
                    Systems such as Online Employer®, Quickbooks®, Paycor® and is current member of the American
                    Payroll Association, APA®. Additionally, she is a Certified HR Professional through the Society for Human
                    Resource Management, SHRM®. 
                </p>
                <p>
                    Lisa rounds out the team with her abilities to recognize gaps in HR
                    compliance and offers our clients a valuable resource for HR consultation needs.
                </p>
            </section>

          </section>

          <el-divider></el-divider>

        <!-- ART SHEAD -->
          <section class="team">
              <section class="team-card">
             <el-image
              style="width: 80%;"
              :src="artUrl"></el-image>

              <h1>Art Shead</h1>
              <h2>Benefits Adviser</h2>
              </section>

            <section class="teamDescription">
                <p>
                Arthur (Art) Shead is a lifelong Indiana native, growing up in Indianapolis, attending and graduating from Warren Central High School in 1990.
                </p>

                <p>
                He attended and graduated from Indiana State University in 1994 with a BS in Political Science. He then spent nearly 10 years working in the financial services field before beginning his career in the Life and Health Insurance industry.
                </p>

                <p>
                Art specializes in retirement services, representing employer groups as well as individuals with life insurance, Medicare and Medicare-related products, as well as custodial care products such as long term and short term care.
                </p>
            </section>

          </section>

        <el-divider></el-divider>

        <!-- AL BROWN -->
          <section class="team">
              <section class="team-card">
             <el-image
              style="width: 80%;"
              :src="alUrl"></el-image>

              <h1>Al Brown</h1>
              <h2>Attorney at Law</h2>
              </section>

                <section class="teamDescription">
              <p>As a business attorney, Al has brought a unique set of skills to our team. For many years, he was engaged in the practice of law and then traveled a different path as an independent insurance agent. </p>

              <p>He’s a Certified Public Accountant (inactive) and has taught courses that prepared students to sit for the CPA exam.</p>

              <p>During his 35 year professional and business careers, Al has worked with a broad range of individuals and businesses throughout Central Indiana and enjoyed the opportunity to provide professional services to both.</p>

              <p>He has worked with individuals and businesses in times of tragedy as well as planning and dealing with the day to day circumstances that confront us all.</p>

              <p>Through the years, Al has been fortunate to provide business and risk management counseling services to many clients, including start-up and existing businesses that benefit from his background in law, accounting and insurance.</p>
                </section>
          </section>
        </el-card>
</template>

<script>
    export default {
        name:"TeamBlock",
        data() {
            return {
                tomUrl: require('@/assets/imgs/tomguy.png'),
                lisaUrl: require('@/assets/imgs/lisacutout.png'),
                artUrl: require('@/assets/imgs/artguy.png'),
                alUrl: require('@/assets/imgs/alguy.png'),
                samUrl: require('@/assets/imgs/samCutout.png'),
            }
        },
    }
</script>

<style scoped>
    .team {
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: row;
  }

  .team-card {
    width:30%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .teamDescription {
    width:70%;
  }

  .teamDescription p {
    font-size:14px;
  }
</style>