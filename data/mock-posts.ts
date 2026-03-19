import heroPost1 from "@/assets/hero-post-1.jpg";
import heroPost2 from "@/assets/hero-post-2.jpg";
import heroPost3 from "@/assets/hero-post-3.jpg";
import heroPost4 from "@/assets/hero-post-4.jpg";
import heroPost5 from "@/assets/hero-post-5.jpg";
import heroPost6 from "@/assets/hero-post-6.jpg";
import type { BlogPost } from "./types";

export const mockPosts: BlogPost[] = [
  {
    slug: "the-art-of-slow-living",
    title: "The Art of Slow Living in a World That Never Stops",
    excerpt:
      "How reclaiming stillness became the most radical act of our generation — and why it matters more than ever.",
    category: "Culture",
    author: "Elena Marchetti",
    date: "March 2, 2026",
    featuredImage: heroPost1,
    content: `
<p>There is something quietly revolutionary about choosing to slow down. In a culture that celebrates constant motion — the hustle, the grind, the relentless optimisation of every waking hour — stillness feels almost subversive.</p>

<p>Yet across the world, a growing number of people are making a conscious choice to step off the treadmill. They are redefining success not by output, but by presence. Not by accumulation, but by attention.</p>

<h2>What Slow Living Actually Means</h2>

<p>Slow living is not about doing nothing. It is about doing less with greater intention. It's the difference between scrolling through a hundred articles and sitting with one book for an afternoon. Between multitasking through dinner and tasting every bite.</p>

<blockquote>The greatest commodity of the twenty-first century is not time — it is attention. And attention, by its very nature, demands slowness.</blockquote>

<p>This philosophy has roots in the Slow Food movement that began in Italy in the late 1980s, a direct response to the opening of a McDonald's near the Spanish Steps in Rome. What started as a protest about food eventually became a broader meditation on how we live.</p>

<h2>The Science of Slowing Down</h2>

<p>Neuroscience supports what contemplatives have known for millennia: our brains need rest to function well. The default mode network — the brain's "resting state" — is where some of our most creative thinking happens. When we are perpetually stimulated, we never access it.</p>

<p>Studies from the University of California found that people who took regular breaks in natural settings scored 50% higher on creative problem-solving tests. The brain, it turns out, needs boredom the way muscles need sleep.</p>

<h3>Practical Steps Toward Slowness</h3>

<p>Start small. Choose one meal a day to eat without a screen. Walk a familiar route without headphones. Sit with a cup of tea and do absolutely nothing else. These are not luxuries — they are necessities disguised as simplicity.</p>

<p>The art of slow living is, ultimately, the art of being human — fully, deeply, without apology.</p>
    `,
  },
  {
    slug: "architecture-of-silence",
    title: "The Architecture of Silence: Designing Spaces That Listen",
    excerpt:
      "A look at how modern architects are embracing quietude as a design principle, creating buildings that breathe.",
    category: "Design",
    author: "James Whitfield",
    date: "February 24, 2026",
    featuredImage: heroPost2,
    content: `
<p>In a profession often associated with bold gestures and dramatic forms, a quieter movement is emerging. A handful of architects around the world are designing buildings not to shout, but to listen — spaces where silence itself becomes a material.</p>

<p>Peter Zumthor's Therme Vals in Switzerland remains a touchstone. The stone bathhouse, carved into a mountainside, uses light, water, and stone to create an atmosphere of near-monastic contemplation. Visitors report that they whisper involuntarily upon entering.</p>

<h2>Why Silence Matters in Architecture</h2>

<p>We spend roughly 90% of our lives indoors. The quality of the spaces we inhabit shapes our thoughts, our moods, our capacity for reflection. Yet most modern buildings are designed for efficiency, not for the human spirit.</p>

<blockquote>Architecture is the thoughtful making of space. — Louis Kahn</blockquote>

<p>The recent trend toward "restorative architecture" acknowledges that buildings can heal. Hospitals designed with natural light and views of greenery see faster patient recovery times. Schools with better acoustics show improved learning outcomes.</p>

<h2>Materials of Quietude</h2>

<p>Certain materials carry an inherent stillness: raw concrete with its gentle imperfections, untreated wood that ages gracefully, stone that holds the cold of centuries. These are not trendy choices — they are timeless ones.</p>

<p>The best silent spaces share a common trait: they make you aware of your own breathing. And in that awareness, something shifts.</p>
    `,
  },
  {
    slug: "morning-rituals-around-the-world",
    title: "Morning Rituals Around the World: How Cultures Begin the Day",
    excerpt:
      "From Japanese tea ceremonies to Scandinavian forest walks, an exploration of how mornings shape civilisations.",
    category: "Lifestyle",
    author: "Sofia Andersson",
    date: "February 18, 2026",
    featuredImage: heroPost3,
    content: `
<p>How a culture begins its day reveals everything about its values. In Japan, the morning tea ceremony — <em>chanoyu</em> — is a meditation on impermanence. In Denmark, the concept of <em>morgenmad</em> (literally "morning food") is treated with the same reverence as dinner elsewhere.</p>

<p>These are not quaint customs. They are technologies of wellbeing, refined over centuries.</p>

<h2>Japan: The Art of the First Cup</h2>

<p>In traditional Japanese households, the first cup of tea is not merely a drink — it is a ritual of transition. The kettle is heated slowly. The matcha is whisked with deliberate strokes. The cup is held in both hands. Each gesture carries meaning.</p>

<blockquote>In the preparation of tea, the host does not merely serve — they offer their full attention as a gift.</blockquote>

<h2>Scandinavia: Walking Into the Morning</h2>

<p>In Norway and Sweden, the <em>morgonpromenad</em> (morning walk) is a near-universal habit. Rain or shine, Scandinavians step outside before the day's demands begin. The forest, they believe, resets the nervous system in ways no amount of coffee can.</p>

<p>Research from the Karolinska Institute confirms this intuition: morning exposure to natural light regulates circadian rhythms, improving sleep quality by up to 30%.</p>

<h3>Finding Your Own Morning Ritual</h3>

<p>The specific practice matters less than the intention behind it. What every great morning ritual shares is a moment of conscious transition — a threshold between rest and action, crossed with awareness.</p>
    `,
  },
  {
    slug: "reading-in-the-age-of-distraction",
    title: "Reading in the Age of Distraction",
    excerpt:
      "Why deep reading is disappearing and what we lose when we can no longer sit with a single text.",
    category: "Culture",
    author: "Thomas Ashworth",
    date: "February 10, 2026",
    featuredImage: heroPost4,
    content: `
<p>The average person now reads for approximately 15 minutes a day — down from nearly an hour in the 1990s. We scan more than ever, but we read less. The distinction matters profoundly.</p>

<p>Deep reading — the kind that requires sustained attention, that allows you to lose yourself in an argument or a narrative — activates parts of the brain associated with empathy, moral reasoning, and emotional complexity. Scanning does not.</p>

<h2>What We Lose</h2>

<p>Maryanne Wolf, a cognitive neuroscientist at UCLA, has spent decades studying how the brain reads. Her conclusion is sobering: we are losing what she calls "cognitive patience" — the ability to sit with complexity, to resist the urge for quick resolution.</p>

<blockquote>We are not just reading differently. We are thinking differently. And the implications are vast.</blockquote>

<p>When we lose the capacity for deep reading, we lose the capacity for deep thinking. The two are inextricable. A democracy depends on citizens who can hold multiple perspectives simultaneously, who can follow an argument to its conclusion before judging it.</p>

<h2>Reclaiming the Practice</h2>

<p>The solution is disarmingly simple: read one thing, slowly, every day. Not on a screen if you can help it. A physical book, held in your hands, with no notifications competing for your attention.</p>

<p>It will feel difficult at first. Your mind will wander. This is not a sign of failure — it is a sign of how much the practice is needed.</p>
    `,
  },
  {
    slug: "gardens-as-philosophy",
    title: "Gardens as Philosophy: What Growing Things Teach Us About Time",
    excerpt:
      "In an era of instant everything, the garden remains the last place where patience is non-negotiable.",
    category: "Nature",
    author: "Elena Marchetti",
    date: "February 3, 2026",
    featuredImage: heroPost5,
    content: `
<p>A garden is the only artwork that is never finished. It grows, decays, regenerates, surprises. It operates on a timescale that humbles every human ambition. You cannot rush a rose.</p>

<p>This is precisely why gardens matter now more than ever. In a culture addicted to instant results, the garden insists on process. It rewards not cleverness, but consistency. Not innovation, but observation.</p>

<h2>The Japanese Garden: A Lesson in Restraint</h2>

<p>In Kyoto's Ryoan-ji temple, fifteen stones are arranged in a sea of raked gravel. No matter where you stand, you can never see all fifteen at once. The garden is a meditation on the limits of perception — a reminder that we never see the whole picture.</p>

<blockquote>A garden is a grand teacher. It teaches patience and careful watchfulness; it teaches industry and thrift; above all, it teaches entire trust. — Gertrude Jekyll</blockquote>

<h2>What Growing Teaches</h2>

<p>Every gardener learns the same lesson eventually: control is an illusion. You can prepare the soil, choose the seeds, water faithfully — and still, the frost comes. The aphids arrive. The rain doesn't.</p>

<p>And yet you plant again. This is not naivety. It is the deepest form of hope — hope grounded in experience, in the knowledge that most seeds, given time and care, do eventually grow.</p>
    `,
  },
  {
    slug: "the-lost-art-of-analog-photography",
    title: "The Lost Art of Analog Photography",
    excerpt:
      "Why shooting on film forces you to see differently — and why that discipline matters in a digital world.",
    category: "Craft",
    author: "Marcus Chen",
    date: "January 27, 2026",
    featuredImage: heroPost6,
    content: `
<p>When you have 36 exposures instead of 36,000, every frame becomes a decision. You learn to see before you shoot. You learn to wait. You learn that the best photograph is often the one you don't take.</p>

<p>This is the discipline of analog photography — and it is making a quiet comeback among photographers who feel that the digital revolution, for all its gifts, has cost them something essential.</p>

<h2>The Economics of Attention</h2>

<p>A roll of 35mm film costs around eight dollars. Development and scanning add another fifteen. Each photograph, then, costs roughly sixty-five cents. This small friction changes everything.</p>

<blockquote>The limitation is not a constraint — it is a lens. Through scarcity, we see more clearly.</blockquote>

<p>Digital photography removed all friction from the act of image-making. And friction, it turns out, was doing important work. It was forcing us to be present, to compose with intention, to commit to a moment before pressing the shutter.</p>

<h2>Why Film Matters Now</h2>

<p>The resurgence of film is not nostalgia. It is a recognition that the tools we use shape the work we make — and, by extension, the way we see. A photographer who shoots film learns to trust their eye over the screen. They learn patience. They learn that some things cannot be undone.</p>

<p>In a world of infinite do-overs, that lesson has a particular power.</p>
    `,
  },
];
